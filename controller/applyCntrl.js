const Apply = require('../Model/applyModel')

exports.createApply=async (req,res,next) => {
    const {name,education,userID,salary,jobID}=req.body
    const apply =await Apply.create({name,education,userID,salary,jobID})
    res.status(200).json({
        success:true,
        apply
    })
} 

exports.getApply=async (req,res,next) => {
    const apply = await Apply.find()

    res.status(200).json({
        success:true,
        apply
    })
}
exports.myApply=async (req,res,next) => {
    const apply = await Apply.find({user:req.user.id})

    res.status(200).json({
        success:true,
        apply
    })
}

exports.updateApply=async (req,res,next) => {
    let apply = await Apply.findById(req.params.id)
    if(!apply){
        return res.status(400).json({
            success:false,
            message:'apply not found'
        })}
        apply = await Apply.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
        })
        res.status(200).json({
            success:true,
            apply
        })
}

exports.singleApply=async (req,res,next) => {
    const apply = await Apply.findById(req.params.id)
    if(!apply){
        return res.status(400).json({
            success:false,
            message:'apply not found'
        })
    }
    res.status(200).json({
        success:true,
        apply
    })
}