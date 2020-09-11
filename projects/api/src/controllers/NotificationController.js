const sendEmail = require('../helpers/sendMail')

module.exports = {
  async send(request, response) {
    try {
      await sendEmail({
        from: 'Nuno Pereira <nunopereira.dev@gmail.com>',
        to: 'hello@nunopereira.tech',
        subject: request.body.subject,
        message: request.body.message,
      })

      response.status(200).send({
        status: 'success',
      })
    } catch (error) {
      response.status(400).send({
        status: 'failed',
        error: error,
      })
    }
  },
}
