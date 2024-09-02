"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueController = void 0;
class IssueController {
    constructor(issueService) {
        this.issueService = issueService;
    }
    async getAllIssues(req, res, next) {
        try {
            const issues = await this.issueService.getAllIssues();
            res.json(issues);
        }
        catch (error) {
            next(error);
        }
    }
    async getIssueById(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const issue = await this.issueService.getIssueById(id);
            if (issue) {
                res.json(issue);
            }
            else {
                console.warn(`Issue ${id} not found`);
                res.status(404).json({ message: "Issue not found" });
            }
        }
        catch (error) {
            next(error);
        }
    }
    async createIssue(req, res, next) {
        try {
            const issueDto = req.body;
            const newIssue = await this.issueService.createIssue(issueDto);
            res.status(201).json(newIssue);
        }
        catch (error) {
            next(error);
        }
    }
    async updateIssue(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const issueDto = req.body;
            const updatedIssue = await this.issueService.updateIssue(id, issueDto);
            if (updatedIssue) {
                res.json(updatedIssue);
            }
            else {
                console.warn(`Issue ${id} not found`);
                res.status(404).json({ message: "Issue not found" });
            }
        }
        catch (error) {
            next(error);
        }
    }
    async deleteIssue(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await this.issueService.deleteIssue(id);
            if (deleted) {
                res.status(204).send();
            }
            else {
                console.warn(`Issue ${id} not found`);
                res.status(404).json({ message: "Issue not found" });
            }
        }
        catch (error) {
            next(error);
        }
    }
}
exports.IssueController = IssueController;
