var express = require('express');
var router = express.Router();

const controller = require('../controllers/job.controller');

router.post('/', controller.executeJob)
router.get('/', controller.executeJob)

module.exports = router;