#!/usr/bin/env node
const express = require('express')
const path = require('path')
const compression = require('compression')
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 9090
require('dotenv').config()

const app = express()

app.use(compression())
app.use(cors())

app.use(express.static('dist'))

const config = {
  'headers': { 'Authorization': `TOKEN ${process.env.API_TOKEN}` }
}

app.get('/api/invoices', (req, res) => {
  return axios.get(`https://falcon.simplelegal.com/api/v1/invoices/`, config)
    .then(invoices => res.send(invoices.data))
    .catch(error => res.send(error.status))
})

app.get('/api/invoices/:id', (req, res) => {
  const id = req.params.id
  return axios.get(`https://falcon.simplelegal.com/api/v1/invoices/${id}/`, config)
    .then(details => res.send(details.data))
    .catch(error => res.send(error.status))
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'))
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

module.exports = app
