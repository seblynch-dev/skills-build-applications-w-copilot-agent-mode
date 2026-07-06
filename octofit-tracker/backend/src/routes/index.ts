import { Router } from 'express';

import { apiBaseUrl } from '../config/apiUrl';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

type ResourceName = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';

const router = Router();

const resourceDescriptions: Record<ResourceName, string> = {
  users: 'User authentication and profile records',
  teams: 'Team creation and management records',
  activities: 'Activity logging and tracking records',
  leaderboard: 'Competitive leaderboard records',
  workouts: 'Personalized workout suggestion records',
};

async function getResourceData(resourceName: ResourceName) {
  switch (resourceName) {
    case 'users':
      return User.find().lean();
    case 'teams':
      return Team.find().lean();
    case 'activities':
      return Activity.find().lean();
    case 'leaderboard':
      return LeaderboardEntry.find().sort({ rank: 1 }).lean();
    case 'workouts':
      return Workout.find().lean();
  }
}

function registerCollectionRoute(resourceName: ResourceName) {
  router.get(`/${resourceName}/`, async (_request, response, next) => {
    try {
      const data = await getResourceData(resourceName);

      response.json({
        resource: resourceName,
        description: resourceDescriptions[resourceName],
        url: `${apiBaseUrl}/api/${resourceName}/`,
        count: data.length,
        data,
      });
    } catch (error) {
      next(error);
    }
  });
}

registerCollectionRoute('users');
registerCollectionRoute('teams');
registerCollectionRoute('activities');
registerCollectionRoute('leaderboard');
registerCollectionRoute('workouts');

export default router;