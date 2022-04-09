var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller');
const validator = require('../middlewares/validators/user.validator')

router.post('/login', controller.loginUser)

router.get('/', controller.getUsers)
router.get('/:id',  controller.getUser)
router.post('/', validator.validateUserRegistration, controller.createUser)
router.patch('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

module.exports = router;