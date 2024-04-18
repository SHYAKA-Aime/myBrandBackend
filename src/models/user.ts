import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

export const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
