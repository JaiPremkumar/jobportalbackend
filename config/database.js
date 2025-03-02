const mongoose = require('mongoose')

const connectDb = mongoose
.connect('mongodb://127.0.0.1:27017/jobPortal',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((con)=>{
    console.log(`Mongodb connect to the host: ${con.connection.host}`);
})
.catch((err)=>{
    console.log(err)
})
module.exports = connectDb