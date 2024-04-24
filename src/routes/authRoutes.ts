import express from 'express';
import { signup, login,getUsers,getUserInfo } from '../controllers/authController';
import { isAdmin,Adminlogin } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: User Signup
 *     description: Register a new user
 *     tags: [Authentication]
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
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid request body
 */

router.post('/signup', signup);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User Login
 *     description: Log in with existing credentials
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */
router.post('/login', login);
/**
 * @swagger
 * /auth/adminlogin:
 *   post:
 *     summary: Admin Login
 *     description: Log in as an admin
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Admin login successful
 *       403:
 *         description: Invalid credentials
 */
router.post('/adminlogin', Adminlogin);


/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: Users List 
 *     description: Get list of all users as an admin
 *     tags: [Authentication]
 *     requestBody:
 *       required: false
 *     responses:
 *       500:
 *         description: Internal Server Error
 */
router.get('/users',isAdmin,getUsers);

/**
 * @swagger
 * /auth/users:
 *   get:
 *     summary: User Info
 *     description: Get Info of a single user
 *     tags: [Authentication]
 *     requestBody:
 *       required: false
 *     responses:
 *       500:
 *         description: Internal Server Error
 */
router.get('/userinfo',getUserInfo);


export default router;
