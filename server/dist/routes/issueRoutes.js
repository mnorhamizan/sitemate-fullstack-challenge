"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssueRoutes = void 0;
const express_1 = require("express");
const createIssueRoutes = (issueController) => {
    const router = (0, express_1.Router)();
    router.get('/', issueController.getAllIssues.bind(issueController));
    router.get('/:id', issueController.getIssueById.bind(issueController));
    router.post('/', issueController.createIssue.bind(issueController));
    router.put('/:id', issueController.updateIssue.bind(issueController));
    router.delete('/:id', issueController.deleteIssue.bind(issueController));
    return router;
};
exports.createIssueRoutes = createIssueRoutes;
