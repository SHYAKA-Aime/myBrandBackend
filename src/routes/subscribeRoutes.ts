// routes/subscribeRoutes.ts
import express from 'express';
import { subscribe,getSubscribers } from '../controllers/subscribeController';

const router = express.Router();
/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe to our Updates
 *     description: Subscribe to our Updates
 *     tags: [Subscription]
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
 *             required:
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: Subscription successful
 *       403:
 *         description: Email is already subscribed
 */
router.post('/subscribe', subscribe);
/**
 * @swagger
 * /subscribers:
 *   get:
 *     summary: All Subscribers
 *     description: Get list of All Subscribers
 *     tags: [Subscription]
 *     requestBody:
 *       required: false
 *     responses:
 *       500:
 *         description: Internal Server Error
 */
router.get('/subscribers', getSubscribers);
export default router;
