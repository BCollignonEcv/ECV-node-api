var express = require('express');
var router = express.Router();

const controller = require('../controllers/source.controller');



router.get('/',  controller.getSources)
router.get('/:id',  controller.getSource)
router.post('/',  controller.createSource)
router.patch('/:id',  controller.updateSource)
router.delete('/:id',  controller.deleteSource)

module.exports = router;