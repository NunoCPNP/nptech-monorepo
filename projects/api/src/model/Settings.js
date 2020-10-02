const mongoose = require('mongoose')

const SettingsSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    required: true,
  },
  pos: {
    type: Boolean,
    required: true,
  },
  themes: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('Settings', SettingsSchema)
