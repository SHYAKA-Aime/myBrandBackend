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

router.get('/messages',isAdmin,getContactMessages);
export default router;
