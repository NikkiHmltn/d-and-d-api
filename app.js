const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello hello hello')
})

app.listen(3000, (req, res) => {
    console.log("Server up and running!")
})