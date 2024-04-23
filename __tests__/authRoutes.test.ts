// const request = require('supertest');
// const app = require('../src/app');
// const User=require('../src/models/user');
// import bcrypt from 'bcrypt';

// describe('Auth Routes', () => {
//   beforeEach(async () => {
//     // Clean up the users collection before each test
//     await User.deleteMany({});
//   });

//   describe('POST /api/signup', () => {
//     it('should create a new user', async () => {
//       const newUser = {
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//       };
//       const res = await request(app).post('/api/signup').send(newUser);
//       expect(res.status).toBe(201);
//       expect(res.body).toHaveProperty('message', 'User created successfully');
//     });
//   });

//   describe('POST /api/login', () => {
//     it('should log in a user', async () => {
//       // Create a user for login
//       const hashedPassword = await bcrypt.hash('password123', 10);
//       const user = new User({
//         name: 'Test User',
//         email: 'test@example.com',
//         password: hashedPassword,
//       });
//       await user.save();

//       const loginData = {
//         email: 'test@example.com',
//         password: 'password123',
//       };
//       const res = await request(app).post('/api/login').send(loginData);
//       expect(res.status).toBe(200);
//       expect(res.body).toHaveProperty('message', 'Login successful');
//       expect(res.body).toHaveProperty('token');
//     });
//   });

//   describe('POST /api/forgot-password', () => {
//     it('should send a password reset email', async () => {
//       const user = new User({
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//       });
//       await user.save();

//       const res = await request(app).post('/api/forgot-password').send({ email: 'test@example.com' });
//       expect(res.status).toBe(200);
//       expect(res.body).toHaveProperty('message', 'Password reset email sent');
//     });
//   });

//   describe('POST /api/reset-password/:token', () => {
//     it('should reset the password', async () => {
//       const user = new User({
//         name: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//         passwordResetToken: 'validToken',
//         passwordResetExpires: Date.now() + 3600000, // 1 hour from now
//       });
//       await user.save();

//       const res = await request(app).post('/api/reset-password/validToken').send({ password: 'newpassword123' });
//       expect(res.status).toBe(200);
//       expect(res.body).toHaveProperty('message', 'Password reset successful');
//     });
//   });
// });
