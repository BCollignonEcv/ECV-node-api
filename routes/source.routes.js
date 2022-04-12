var express = require('express');
var router = express.Router();

const controller = require('../controllers/source.controller');



router.get('/',  controller.getSources)
router.get('/:id',  controller.getSource)
router.post('/',  controller.createSource)
router.patch('/:id',  controller.updateSource)
router.delete('/:id',  controller.deleteSource)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Sources
 *   description: Source management and retrieval
 */

/**
 * @swagger
 * /admin/sources:
 *   post:
 *     summary: Create a source
 *     tags: [Sources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - enable
 *               - name
 *               - baseUrl
 *               - location
 *               - search
 *               - jobOfferTag
 *               - titleTag
 *               - companyTag
 *               - urlTag
 *               - salaryTag
 *             properties:
 *               enable:
 *                 type: boolean
 *               name:
 *                 type: string
 *               baseUrl:
 *                 type: string
 *               location:
 *                 type: string
 *               search:
 *                 type: string
 *               jobOfferTag:
 *                 type: string
 *               titleTag:
 *                 type: string
 *               companyTag:
 *                 type: string
 *               urlTag:
 *                 type: string
 *               salaryTag:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Source'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all sources
 *     tags: [Sources]
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
 *                     $ref: '#/components/schemas/Source'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /admin/sources/{id}:
 *   get:
 *     summary: Get a source
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: Source id
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Source'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a source
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: Source id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               enable:
 *                 type: boolean
 *               name:
 *                 type: string
 *               baseUrl:
 *                 type: string
 *               location:
 *                 type: string
 *               search:
 *                 type: string
 *               jobOfferTag:
 *                 type: string
 *               titleTag:
 *                 type: string
 *               companyTag:
 *                 type: string
 *               urlTag:
 *                 type: string
 *               salaryTag:
 *                 type: string
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Source'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a source
 *     tags: [Sources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: Source id
 *     responses:
 *       "200":
 *         description: No content
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
