require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({msg: 'Connected'})
})

app.listen(3000, (req, res) => {
    console.log("Server up and running!")
})