import express from 'express';
import { sendContactMessage,getContactMessages } from '../controllers/contactController';
import { isAdmin } from '../middleware/authMiddleware';
const router = express.Router();


/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Contact Form Submission
 *     description: Submit a message through the contact form
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - subject
 *               - message
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */

router.post('/contact', sendContactMessage);
/**
 * @swagger
 * /messages:
 *   get:
 *     summary: submitted Messages
 *     description: Get list of all submitted messages as an admin
 *     tags: [Contact]
 *     requestBody:
 *       required: false
 *     responses:
 *       500:
 *         description: Internal Server Error
 */
router.get('/messages',isAdmin,getContactMessages);
export default router;
