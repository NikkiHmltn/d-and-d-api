require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const chai = require('chai')
const expect = chai.expect

// create a new schema that accepts a 'name' object
const testSchema = new Schema({
    name: {type: String, required: true}
})

// create a new collection called 'Name'
const Name = mongoose.model('Name', testSchema)

describe('Database Tests', () => {
    // before starting test, create a sandbox database connection 
    // once connection is established invoke done() 

    before((done) => {
        mongoose.connect(process.env.MONGO_URI)
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', () => {
            console.log('We are connected to test database!')
            done()
        })
    })

    describe('Test database', () => {
        // save object with 'name' value of 'Nikki;
        it('New name saved to test database', (done) => {
            let testName = Name({
                name: 'Nikki'
            })
            testName.save(done)
        })

        it('Dont save incorrect format to db', (done)=>{
            //attempt to save wrong info, triggers error
            let wrongSave = Name({
                notName: 'Not Nikki'
            })

            wrongSave.save(err => {
                if(err) {return done()}
                throw new Error('Should generate error!')
            })

        })

        it('Should retrieve data from test db', (done) =>{
            //look up Nikki obj previously saved
            Name.find({name: 'Nikki'}, (err, name) =>{
                if(err) {throw err}
                if(name.length === 0) {throw new Error('No data!')}
                done()
            })
        })
    })

    // after all tests are finished, drop db, and close connection
    after((done) =>{
        mongoose.connection.db.dropDatabase(() =>{
            mongoose.connection.close(done)
        })
    })
})