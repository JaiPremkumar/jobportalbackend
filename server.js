const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const connectDb = require('./config/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')


dotenv.config({path: path.join(__dirname, "config/config.env") });
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const jobs = require('./route/job')
const applies = require('./route/apply')
const user = require('./route/user')

app.use('/api/v1/',jobs)
app.use('/api/v1',applies)
app.use('/api/v1',user)



app.listen(process.env.PORT,async()=>{
    try {
       await connectDb;
       console.log(`server in ${process.env.PORT} & env ${process.env.NODE_ENV}`)
    } catch (error) {
        console.log(err)
    }
})