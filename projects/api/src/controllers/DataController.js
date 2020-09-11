const Data = require('../model/Data')

module.exports = {
  async get(request, response) {
    const d = await Data.find()

    response.status(200).send({
      status: 'success',
      data: d,
    })
  },

  async post(request, response) {
    const d = new Data({
      navbar: request.body.navbar,
      cta: request.body.cta,
      about: request.body.about,
      technologies: request.body.technologies,
      projects: request.body.projects,
    })

    try {
      const savedData = await d.save()

      response.status(201).send({
        status: 'success',
        data: savedData,
      })
    } catch (error) {
      response.status(400).send(error)
    }
  },
}
