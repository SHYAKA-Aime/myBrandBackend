// authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
require('dotenv').config();



const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; 
const JWT_SECRET='eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMTQ0NDQ3MiwiaWF0IjoxNzExNDQ0NDcyfQ.3j96fJF1y6kPGvM5EFYS4L-cgcNDV024weC0RV1edFw'

// Extend the Request type to include the user property
interface JwtUser {
id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

// Extend the Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: JwtUser;
    }
  }
}


export const Adminlogin = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email: ADMIN_EMAIL, isAdmin: true }, JWT_SECRET);
    res.status(200).json({ message: 'Admin Login successfully',token ,redirectUrl: './Admin/dashboard.html'});
  } else {
    res.status(403).json({ message: 'Invalid credentials' });
  }
};


export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      res.status(401).json({ message: 'Token not provided' });
      return;
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtUser;
     
      if (decoded.email === ADMIN_EMAIL && decoded.isAdmin) {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: 'Forbidden' });
      }
    } catch (error) {
      console.error('Token Verification Error:', error);
      res.status(401).json({ message: 'Invalid token' });
      
    }
  };
  



export const authenticateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Token not provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtUser;
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};




