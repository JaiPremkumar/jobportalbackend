const express = require('express')
const { getApply, createApply, singleApply, updateApply } = require('../controller/applyCntrl')
const router = express.Router()

router.route('/applies').get(getApply)
router.route('/apply/new').post(createApply)
router.route('/applies/:id').get(singleApply)
router.route('/applies').put(updateApply)

module.exports = router
