const request = require('supertest');
const app = require('../src/app');

describe('Contact Routes', () => {
  describe('POST /api/contact', () => {
    it('should send a contact message', async () => {
      const contactMessage = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Test Subject',
        message: 'Test Message',
      };

      const res = await request(app)
        .post('/api/contact')
        .send(contactMessage);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message', 'Message sent successfully');
    });

    it('should return an error for invalid data', async () => {
      const invalidContactMessage = {
        email: 'invalid.email', // Invalid email address
        subject: 'Test Subject',
        message: 'Test Message',
      };

      const res = await request(app)
        .post('/api/contact')
        .send(invalidContactMessage);

      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });
  });
});
