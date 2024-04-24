import express from 'express';
import { isAdmin,authenticateUser } from '../middleware/authMiddleware';
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog,likeBlog, commentOnBlog,getComments } from '../controllers/blogController';

const router = express.Router();

// CRUD operations for blogs



/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog
 *     description: Create a new blog with the provided data
 *     tags: [Blogs]
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Invalid request body
 */

router.post('/blogs', isAdmin, createBlog);
/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all blogs
 *     description: Retrieve a list of all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 */
router.get('/blogs', getBlogs);
/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     description: Retrieve a blog by its ID
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested blog
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       404:
 *         description: Blog not found
 */
router.get('/blogs/:id',getBlogById);
/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Update a blog by ID
 *     description: Update a blog's title, description, and image by its ID (Admin only)
 *     tags: [Blogs]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *             required:
 *               - title
 *               - description
 *               - image
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized, admin privileges required
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */

router.put('/blogs/:id', isAdmin, updateBlog);
/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete a blog by ID
 *     description: Delete a blog by its ID (Admin only)
 *     tags: [Blogs]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       401:
 *         description: Unauthorized, admin privileges required
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */

router.delete('/blogs/:id', isAdmin, deleteBlog);

/**
 * @swagger
 * /blogs/{id}/like:
 *   post:
 *     summary: Like a blog
 *     description: Like a blog by its ID
 *     tags: [Blogs]
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to like
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog liked successfully
 *       400:
 *         description: User has already liked the blog or blog not found
 */

router.post('/blogs/:id/like',authenticateUser, likeBlog);
/**
 * @swagger
 * /blogs/{id}/comment:
 *   post:
 *     summary: Comment on a blog
 *     description: Add a comment to a blog by its ID
 *     tags: [Blogs]
 *     security:
 *        - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to comment on
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - name
 *               - content
 *     responses:
 *       200:
 *         description: Comment added successfully
 *       400:
 *         description: Blog not found
 */
router.post('/blogs/:id/comment',authenticateUser, commentOnBlog);
/**
 * @swagger
 * /blogs/{id}/comments:
 *   get:
 *     summary: Comments of a blog
 *     description: Get list of all Comments on a blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: false
 *     responses:
 *       500:
 *         description: Internal Server Error
 */
router.get('/blogs/:id/comments', getComments);

export default router;
