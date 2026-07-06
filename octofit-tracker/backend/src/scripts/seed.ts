import mongoose from 'mongoose';

import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      { name: 'Cyclone Sprinters', motto: 'Fast feet, steady hearts', memberCount: 4, weeklyGoalMinutes: 900 },
      { name: 'Summit Striders', motto: 'Climb every week', memberCount: 3, weeklyGoalMinutes: 720 },
      { name: 'Core Crew', motto: 'Strong form, stronger team', memberCount: 5, weeklyGoalMinutes: 840 },
    ]);

    await User.insertMany([
      { username: 'maya_runner', email: 'maya@example.com', displayName: 'Maya Chen', fitnessLevel: 'advanced', teamName: 'Cyclone Sprinters' },
      { username: 'leo_lifts', email: 'leo@example.com', displayName: 'Leo Martinez', fitnessLevel: 'intermediate', teamName: 'Core Crew' },
      { username: 'ava_hikes', email: 'ava@example.com', displayName: 'Ava Thompson', fitnessLevel: 'beginner', teamName: 'Summit Striders' },
      { username: 'noah_rows', email: 'noah@example.com', displayName: 'Noah Brooks', fitnessLevel: 'advanced', teamName: 'Cyclone Sprinters' },
    ]);

    await Activity.insertMany([
      { username: 'maya_runner', activityType: 'Interval run', durationMinutes: 45, caloriesBurned: 520, performedAt: new Date('2026-07-01T14:00:00Z') },
      { username: 'leo_lifts', activityType: 'Strength circuit', durationMinutes: 50, caloriesBurned: 410, performedAt: new Date('2026-07-02T18:30:00Z') },
      { username: 'ava_hikes', activityType: 'Trail hike', durationMinutes: 80, caloriesBurned: 620, performedAt: new Date('2026-07-03T09:15:00Z') },
      { username: 'noah_rows', activityType: 'Rowing endurance', durationMinutes: 40, caloriesBurned: 480, performedAt: new Date('2026-07-04T12:45:00Z') },
    ]);

    await LeaderboardEntry.insertMany([
      { username: 'maya_runner', teamName: 'Cyclone Sprinters', points: 1480, rank: 1 },
      { username: 'noah_rows', teamName: 'Cyclone Sprinters', points: 1325, rank: 2 },
      { username: 'ava_hikes', teamName: 'Summit Striders', points: 1190, rank: 3 },
      { username: 'leo_lifts', teamName: 'Core Crew', points: 1110, rank: 4 },
    ]);

    await Workout.insertMany([
      { title: 'Morning Mobility Reset', focusArea: 'Mobility', difficulty: 'beginner', durationMinutes: 20, recommendedFor: ['ava_hikes'] },
      { title: 'Tempo Run Builder', focusArea: 'Cardio', difficulty: 'intermediate', durationMinutes: 35, recommendedFor: ['maya_runner', 'noah_rows'] },
      { title: 'Total Strength Ladder', focusArea: 'Strength', difficulty: 'intermediate', durationMinutes: 45, recommendedFor: ['leo_lifts'] },
      { title: 'Peak Power Intervals', focusArea: 'Conditioning', difficulty: 'advanced', durationMinutes: 30, recommendedFor: ['maya_runner'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
