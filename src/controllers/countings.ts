import mongoose,{ Schema, model, Document } from 'mongoose';

import { Request, Response } from 'express';


import {Blog} from '../models/Blog';
import ContactMessage from '../models/ContactMessage';
import User from '../models/user';
import Subscription from '../models/Subscription';


export const countings = async (req: Request, res: Response): Promise<void> => {
    try {
      const blogCount = await Blog.countDocuments();
      const queryCount = await ContactMessage.countDocuments();
      const userCount = await User.countDocuments();
      const subscriberCount = await Subscription.countDocuments();
  
      res.status(200).json({ blogCount, queryCount, userCount, subscriberCount });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };