var express = require('express');
var router = express.Router();

const controller = require('../controllers/job.controller');

router.post('/', validator.body(jobSchema.search), controller.getJobs)
router.get('/', validator.params(jobSchema.search), controller.getJobs)

module.exports = router;