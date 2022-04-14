const {param, validationResult} = require('express-validator');

exports.validateRoleId = [
    param('id').trim().escape().notEmpty().withMessage('id is missing')
        .isUUID(4).withMessage('id is not of UUIDV4 type'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    },
];