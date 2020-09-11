const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const mailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: options.message,
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendEmail
