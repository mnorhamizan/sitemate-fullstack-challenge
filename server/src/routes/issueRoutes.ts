import { Router } from 'express';
import { IssueController } from '../controllers/IssueController';

export const createIssueRoutes = (issueController: IssueController): Router => {
  const router = Router();

  router.get('/', issueController.getAllIssues.bind(issueController));
  router.get('/:id', issueController.getIssueById.bind(issueController));
  router.post('/', issueController.createIssue.bind(issueController));
  router.put('/:id', issueController.updateIssue.bind(issueController));
  router.delete('/:id', issueController.deleteIssue.bind(issueController));

  return router;
};