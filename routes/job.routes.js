var express = require('express');
var router = express.Router();

const controller = require('../controllers/job.controller');
const validator = require('../middlewares/validators/job.validator');

router.post('/', validator.validateJobBody, controller.executeJob)//location + search BODY
router.get('/', validator.validateJobParam, controller.executeJob)//param ou query

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job retrieval
 */

/**
 * @swagger
 * /admin/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Job'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /admin/jobs/{id}:
 *   get:
 *     summary: Get a job
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: Job id
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Job'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */
