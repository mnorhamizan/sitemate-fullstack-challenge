import express from 'express';
import cors from 'cors';
import { InMemoryIssueRepository } from './repositories/InMemoryIssueRepository';
import { IssueService } from './services/IssueService';
import { IssueController } from './controllers/IssueController';
import { createIssueRoutes } from './routes/issueRoutes';
import { errorHandler } from './middleware/errorHandler';

export const createApp = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Dependencies
  const issueRepository = new InMemoryIssueRepository();
  const issueService = new IssueService(issueRepository);
  const issueController = new IssueController(issueService);

  // Routes
  app.use('/issues', createIssueRoutes(issueController));

  // Error handling
  app.use(errorHandler);

  return app;
};