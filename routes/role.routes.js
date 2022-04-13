var express = require('express');
var router = express.Router();

const controller = require('../controllers/role.controller');
const auth = require('../middlewares/authentification/auth.middleware');

router.get('/', auth.authenticate, controller.getRoles)
router.get('/:id', auth.authenticate, controller.getRole)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role retrieval
 */

/**
 * @swagger
 * /admin/roles:
 *   get:
 *     summary: Get all roles
 *     tags: [Roles]
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
 *                     $ref: '#/components/schemas/Role'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /admin/roles/{id}:
 *   get:
 *     summary: Get a role
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuidv4
 *         description: Role id
 *     responses:
 *       "302":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Role'
 *       "500":
 *         $ref: '#/components/responses/Forbidden'
 */
