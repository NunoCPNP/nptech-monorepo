const Settings = require('../model/Settings')

module.exports = {
  async get(request, response) {
    const s = await Settings.find()

    response.status(200).send({
      status: 'success',
      data: s,
    })
  },

  async post(request, response) {},
}
