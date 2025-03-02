const mongoose = require('mongoose')


const jobShema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        default:1
    },
    description:{
        type:String,
        require:true
    },
    vendor:{
        type:String,
        require:true
    },
    
    domain:{
        type:String,
        require:true
    },
    vaccancy:{
        type:Number,
        default:1
    
    },
    skills:{
        type:String,
        require:true
    },
    reviews:[
        {
            user:mongoose.Schema.Types.ObjectId,
            rating:{
                type:Number,
                 default:0
            },
            comment:{   
                type:String,
                required:true
                
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    createdAt:{ 
        type:Date,
        default:Date.now()
    }
})

let Schema = mongoose.model('jobs',jobShema)
module.exports = Schema