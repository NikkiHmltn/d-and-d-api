require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = process.env.MONGO_URI

const connectionParams = {
    useNewURLParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to Database')
    })
    .catch((err) => {
        console.error('Error connecting to DB')
    })

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({msg: 'Connected'})
})

app.listen(3000, (req, res) => {
    console.log("Server up and running!")
})