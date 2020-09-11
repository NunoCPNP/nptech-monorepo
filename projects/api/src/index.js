const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const connectDB = require('./config/mongodb')

dotenv.config({ path: './src/config/config.env' })

connectDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:3000' }))
} else {
  app.use(cors({ origin: '' }))
}

const dataRoute = require('./routes/Data')
const notificationRoute = require('./routes/Notification')

app.use('/api/v1/data', dataRoute)
app.use('/api/v1/notification', notificationRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
