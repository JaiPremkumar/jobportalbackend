const job = require('./Model/jobModel')
const jobs = require('./data/jobs.json')
const connectDB = require('./config/database')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path:path.join(__dirname,"config/config.env")})


const seeder=async () => {
    try {
        await connectDB
        await job.deleteMany()
        console.log('deleted')
        await job.insertMany(jobs)
        console.log('inserted')
        
    } catch (err) {
        console.log(err)
    }
    process.exit()
}
seeder()