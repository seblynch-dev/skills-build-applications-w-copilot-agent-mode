import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import './config/database';
import apiRoutes from './routes';

const apiPort = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

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