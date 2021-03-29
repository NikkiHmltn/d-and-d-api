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

module.exports = {
    Classes: require('./Classes')
}