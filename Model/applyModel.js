const mongoose = require('mongoose')

const applySchema=new mongoose.Schema({
        name:{
            type:String
        },
        education:{
            type:String
        },
        email:{
            type:String
        },
        jobsalary:{
            type:String
        },
    userID:{
        type:String
    },
    jobID:{
        type:String
    },
    status:{
        type:String,
        default:'Applied'
    
    }, 
    jobname:{
        type:String,
        require:true
    },
  
    jobdescription:{
        type:String,
        require:true
    },
    jobvendor:{
        type:String,
        require:true
    }

})

let Schema = mongoose.model('applies',applySchema)

module.exports = Schema