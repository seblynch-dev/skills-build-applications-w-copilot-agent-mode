import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import { apiBaseUrl, apiPort } from './config/apiUrl';
import './config/database';
import apiRoutes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    port: apiPort,
    apiBaseUrl,
    database: 'octofit_db',
  });
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({
    error: 'Internal server error',
    message: error.message,
  });
});

app.listen(apiPort, () => {
  console.log(`OctoFit backend listening at ${apiBaseUrl}`);
});