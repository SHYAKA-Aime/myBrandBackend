// models/Subscription.ts
import mongoose,{ Schema, model, Document } from 'mongoose';

export interface SubscriptionDocument extends Document {
  fullName: string;
  email: string;
}

const subscriptionSchema = new Schema<SubscriptionDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Subscription = model<SubscriptionDocument>('Subscription', subscriptionSchema);

export default Subscription;
