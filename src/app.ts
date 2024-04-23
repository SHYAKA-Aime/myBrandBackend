import express from 'express';
const cors = require('cors');
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import contactRoutes from './routes/contactRoutes';
import blogRoutes from './routes/blogRoutes';
import dotenv from 'dotenv';
import subscribeRoutes from './routes/subscribeRoutes';
import countingsRoutes from './routes/countingsRoute';

dotenv.config();


const swaggerUi = require('swagger-ui-express');
const specs = require('../swaggerConfig');
const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || '';

mongoose.connect(MONGODB_URI, {
 
});

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/auth', authRoutes);
app.use('/api/', contactRoutes);
app.use('/api', blogRoutes);
app.use('/api',subscribeRoutes);
app.use('/api',countingsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;