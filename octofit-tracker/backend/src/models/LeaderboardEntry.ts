import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  username: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    username: { type: String, required: true, unique: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);