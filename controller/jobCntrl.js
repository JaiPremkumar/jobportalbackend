const Job = require('../Model/jobModel')
const APIFeature = require('../middleware/apiFeature')

exports.newJob=async (req,res,next) => {
    const{name,salary,description,vendor,vaccancy,domain}=req.body;
    const job =await Job.create({
        name,salary,description,vendor,vaccancy,domain
    })
    res.status(200).json({
        success:true,
        job
    })
}

exports.getJobs=async (req,res,next) => {
    const jobs = await Job.find()
    res.status(200).json({
        success:true,
        jobs
    })
}

exports.searchJobs=async (req,res,next) => {

    const apiFeatures = new APIFeature(Job.find(),req.qery).search().filter()
    const jobs = await apiFeatures
    res.status(200).json({
        success:true,
        jobs
    })
}

exports.salaryJobs=async (req,res,next) => {

    const apiFeatures = new APIFeature(Job.find(),req.qery).salarySearch().filter()
    const jobs = await apiFeatures.query
    res.status(200).json({
        success:true,
        jobs
    })
}

exports.idJobs=async (req,res,next) => {

    const apiFeatures = new APIFeature(Job.find(),req.qery).idSearch().filter()
    const jobs = await apiFeatures.query
    res.status(200).json({
        success:true,
        jobs
    })
}

exports.singleJob=async (req,res,next) => {
    const job = await Job.findById(req.params.id)
    if(!job){
        return res.status(400).json({
            success:false,
            message:'job not found'
        })
    }
    res.status(200).json({
        success:true,
        job
    })
}

exports.updateJob=async (req,res,next) => {
    let job = await Job.findById(req.params.id)
    if(!job){
        return res.status(400).json({
            success:false,
            message:'product not found'
        })}
        job = await Job.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
        })
        res.status(200).json({
            success:true,
            job
        })

    
    
}