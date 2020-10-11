const express = require('express')
const morgan = require('morgan')

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'


const app = express()

// Middleware
app.use('/', morgan('dev'))

app.get('/', (req, res)=>{
    res.send('Hello Get Request working')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://${HOST}/${PORT}`)
})