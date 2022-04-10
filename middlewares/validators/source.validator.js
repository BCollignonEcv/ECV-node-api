const {body, validationResult} = require('express-validator');

exports.validateSourceRegistration = [
    body('enable').trim().escape().notEmpty().withMessage('enable is missing')
        .isBoolean().withMessage('should be a boolean'),
    body('name').trim().escape().notEmpty().withMessage('name is missing'),
    body('baseUrl').trim().escape().notEmpty().withMessage('baseUrl is missing'),
    body('location').trim().escape(),
    body('search').trim().escape().notEmpty().withMessage('search is missing'),
    body('jobOfferTag').trim().escape(),
    body('titleTag').trim().escape(),
    body('companyTag').trim().escape(),
    body('urlTag').trim().escape(),
    body('salaryTag').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        return res.status(200).send({data: req.body })
        next();
    },
];

exports.validateSourceEdition = [
    body('enable').trim().escape().optional().notEmpty().withMessage('enable is missing')
        .isBoolean().withMessage('should be a boolean'),
    body('name').trim().escape().optional().notEmpty().withMessage('name is missing'),
    body('baseUrl').trim().escape().optional().notEmpty().withMessage('baseUrl is missing'),
    body('location').trim().escape().optional(),
    body('search').trim().escape().optional().notEmpty().withMessage('search is missing'),
    body('jobOfferTag').trim().escape().optional(),
    body('titleTag').trim().escape().optional(),
    body('companyTag').trim().escape().optional(),
    body('urlTag').trim().escape().optional(),
    body('salaryTag').trim().escape().optional(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        return res.status(200).send({data: req.body })
        next();
    },
];