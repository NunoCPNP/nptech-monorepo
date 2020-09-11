const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  navbar: [],
  cta: [],
  about: [],
  technologies: [],
  projects: [],
})

module.exports = mongoose.model('Data', DataSchema)
