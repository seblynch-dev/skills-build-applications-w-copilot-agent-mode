import { Schema, model } from 'mongoose';

export interface UserDocument {
  username: string;
  email: string;
  displayName: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  teamName: string;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    teamName: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model<UserDocument>('User', userSchema);