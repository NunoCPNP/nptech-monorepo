const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(3333, () => {
  console.log('App running on port 3333')
})
