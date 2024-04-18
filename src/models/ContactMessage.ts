import mongoose, { Document } from 'mongoose';

export interface ContactMessageDocument extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactMessageSchema = new mongoose.Schema<ContactMessageDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const ContactMessage = mongoose.model<ContactMessageDocument>('ContactMessage', contactMessageSchema);

export default ContactMessage;
