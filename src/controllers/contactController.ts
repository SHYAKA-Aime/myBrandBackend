import { Request, Response } from 'express';
import ContactMessage from '../models/ContactMessage';
import { contactFormSchema } from '../utils/validation';

export const sendContactMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const { error } = contactFormSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const { name, email, subject, message } = req.body;

    // Save message to database
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getContactMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}