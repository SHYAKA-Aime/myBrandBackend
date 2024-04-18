import mongoose, { Schema, Document } from 'mongoose';

export interface BlogDocument extends Document {
  title: string;
  description: string;
  image: string;
  likes: number;
  likedBy: string[]; 
  comments: { name: string; comment: string }[];
}

const blogSchema: Schema<BlogDocument> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Schema.Types.Mixed, required: true }, 
  likes: { type: Number, default: 0 },
  likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ name: String, comment: String }],
});

export const Blog = mongoose.model<BlogDocument>('Blog', blogSchema);

