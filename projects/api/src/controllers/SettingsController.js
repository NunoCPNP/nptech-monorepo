const Settings = require('../model/Settings')

module.exports = {
  async get(request, response) {
    const s = await Settings.find()

    response.status(200).send({
      status: 'success',
      data: s,
    })
  },

  async put(request, response) {
    const id = '5f7a197e3ba1682da08c2c36'

    try {
      const settings = await Settings.findByIdAndUpdate(id, request.body, {
        new: true,
      })

      response.status(201).send({
        status: 'success',
        data: settings,
      })
    } catch (error) {
      response.status(404).send({
        status: 'No settings found with that ID',
        error: error,
      })
    }
  },

  async post(request, response) {
    const settings = new Settings({
      active: request.body.active,
      pos: request.body.pos,
      themes: request.body.themes,
    })

    try {
      const savedSettings = await settings.save()

      response.status(201).send({
        status: 'success',
        data: savedSettings,
      })
    } catch (error) {
      response.status(400).send(error)
    }
  },
}
