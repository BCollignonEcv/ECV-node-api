const {body, validationResult} = require('express-validator');

exports.validateUserRegistration = [
    body('firstname').trim().escape().notEmpty().withMessage('firstname is missing'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
        next();
    },
];