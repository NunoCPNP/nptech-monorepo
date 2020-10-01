const moongoose = require('moongoose')

const SettingsSchema = new moongoose.Schame({
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

module.exports = moongoose.model('Settings', SettingsSchema)
