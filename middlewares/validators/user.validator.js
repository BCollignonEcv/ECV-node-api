const {body, validationResult} = require('express-validator');

exports.validateUserRegistration = [
    body('firstname').trim().escape().notEmpty().withMessage('firstname is missing'),
    body('lastname').trim().escape().notEmpty().withMessage('lastname is missing'),
    body('email').trim().escape().notEmpty().withMessage('email is missing')
        .isEmail().withMessage('should be an valid email format'),
    body('username').trim().escape().notEmpty().withMessage('username is missing'),
    body('password').trim().escape().notEmpty().withMessage('password is missing'),
    body('role').trim().escape().notEmpty().withMessage('role is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        return res.status(200).send({data: req.body })
        next();
    },
];

exports.validateUserEdition = [
    body('firstname').trim().escape().optional().notEmpty().withMessage('firstname is missing'),
    body('lastname').trim().escape().optional().notEmpty().withMessage('lastname is missing'),
    body('email').trim().escape().optional().notEmpty().withMessage('email is missing')
        .isEmail().withMessage('should be an valid email format'),
    body('username').trim().escape().optional().notEmpty().withMessage('username is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        return res.status(200).send({data: req.body })
        next();
    },
];

exports.validateUserLogin = [
    body('username').trim().escape().notEmpty().withMessage('username is missing'),
    body('password').trim().escape().notEmpty().withMessage('password is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        return res.status(200).send({data: req.body })
        next();
    },
];