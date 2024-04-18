const request = require('supertest');
const app = require('../src/app');
import { Blog } from '../src/models/Blog';

describe('Blog Routes', () => {
  beforeEach(async () => {
    // Clean up the blogs collection before each test
    await Blog.deleteMany({});
  });

  describe('POST /api/blogs', () => {
    it('should create a new blog if the user is an admin', async () => {
      const adminToken = 'YOUR_ADMIN_TOKEN'; // Set the admin token here

      const newBlog = {
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      };

      const res = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newBlog);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('title', 'Test Blog');
    });

    it('should not create a new blog if the user is not an admin', async () => {
      const userToken = 'YOUR_USER_TOKEN'; // Set a non-admin user token here

      const newBlog = {
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      };

      const res = await request(app)
        .post('/api/blogs')
        .set('Authorization', `Bearer ${userToken}`)
        .send(newBlog);

      expect(res.status).toBe(403); // Forbidden status code
    });
  });

  describe('PUT /api/blogs/:id', () => {
    it('should update a blog if the user is an admin', async () => {
      const adminToken = 'YOUR_ADMIN_TOKEN'; // Set the admin token here

      const blog = new Blog({
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      });
      await blog.save();

      const updatedBlog = {
        title: 'Updated Blog',
        content: 'This is an updated blog',
        image: 'updated.jpg',
      };

      const res = await request(app)
        .put(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updatedBlog);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('title', 'Updated Blog');
    });

    it('should not update a blog if the user is not an admin', async () => {
      const userToken = 'YOUR_USER_TOKEN'; // Set a non-admin user token here

      const blog = new Blog({
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      });
      await blog.save();

      const updatedBlog = {
        title: 'Updated Blog',
        content: 'This is an updated blog',
        image: 'updated.jpg',
      };

      const res = await request(app)
        .put(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .send(updatedBlog);

      expect(res.status).toBe(403); // Forbidden status code
    });
  });

  describe('DELETE /api/blogs/:id', () => {
    it('should delete a blog if the user is an admin', async () => {
      const adminToken = 'YOUR_ADMIN_TOKEN'; // Set the admin token here

      const blog = new Blog({
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      });
      await blog.save();

      const res = await request(app)
        .delete(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message', 'Blog deleted successfully');
    });

    it('should not delete a blog if the user is not an admin', async () => {
      const userToken = 'YOUR_USER_TOKEN'; // Set a non-admin user token here

      const blog = new Blog({
        title: 'Test Blog',
        content: 'This is a test blog',
        image: 'test.jpg',
      });
      await blog.save();

      const res = await request(app)
        .delete(`/api/blogs/${blog._id}`)
        .set('Authorization', `Bearer ${userToken}`);

      expect(res.status).toBe(403); // Forbidden status code
    });
  });
});
