var express = require('express');
var router = express.Router();

const controller = require('../controllers/job.controller');

router.post('/', controller.getJobs)
router.get('/', controller.getJobs)

module.exports = router;