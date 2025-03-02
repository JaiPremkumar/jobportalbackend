const express = require('express')
const { getJobs, newJob, singleJob, updateJob, searchJobs, salaryJobs, idJobs } = require('../controller/jobCntrl')
const router = express.Router()

router.route('/jobs').get(getJobs)
router.route('/job/new').post(newJob)
router.route('/job/:id').get(singleJob)
router.route('/jobUpdate/:id').put(updateJob)
router.route('/search').get(searchJobs)
router.route('/salary').get(salaryJobs)
router.route('/id').get(idJobs)

module.exports = router