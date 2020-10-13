const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')
const dotenv = require('dotenv')

// Load Env Vars
dotenv.config()

// Connect to DB

// Import Routes

// Import Middlewares

// ********************
// Create and Configure an Express Server
// ********************
const app = express()
app.use(express.json())
app.use('/', morgan('dev'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('/', 'app/frontend/build')))
  // Serve the Prod Single Page App
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('/', 'app/frontend/build', 'index.html'))
  })
} else {
  app.use(express.static(path.join(__dirname, '../', 'frontend/public')))
  // Serve the React File
}

// Mount Routes
app.use('/api/home', (req, res) => {
  res.json({
    message: 'Success',
    data: 'You also hit the GET /api/home in the ueHook',
  })
})

app.use('/api/login', (req, res) => {
  res.json({
    message: 'Success',
    data: 'You hit hit the GET api/login in the ueHook',
  })
})

app.use('/api/register', (req, res) => {
  res.json({
    message: 'Success',
    data: 'You hit hit the GET api/register in the ueHook',
  })
})

app.use('/api/dashboard', (req, res) => {
  res.json({
    message: 'Success',
    data: 'You hit hit the GET api/dashboard in the ueHook',
  })
})

// Mount Error Middleware routes

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(
    `Server is running on port: ${PORT} in ${process.env.NODE_ENV} mode`.green
  )
})
