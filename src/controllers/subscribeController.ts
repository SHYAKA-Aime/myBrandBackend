// controllers/subscribeController.ts
import { Request, Response } from 'express';
import Subscription from '../models/Subscription';

export const subscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email } = req.body;

    // Check if the email is already subscribed
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      res.status(400).json({ message: 'Email is already subscribed' });
      return;
    }

    const subscription = new Subscription({ fullName, email });
    await subscription.save();
    res.status(201).json({ message: 'Subscription successful', subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getSubscribers = async (req: Request, res: Response): Promise<void> => {
    try {
    const subscribers = await Subscription.find();
      res.status(200).json(subscribers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };