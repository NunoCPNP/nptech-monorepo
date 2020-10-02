const mongoose = require('mongoose')

const navbarSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const aboutSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  styled: {
    type: String,
    required: true,
  },
})

const projectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  description: [String],
  technologies: [String],
})

const DataSchema = new mongoose.Schema({
  navbar: [navbarSchema],
  cta: [String],
  about: [aboutSchema],
  technologies: [String],
  projects: [projectsSchema],
})

module.exports = mongoose.model('Data', DataSchema)
