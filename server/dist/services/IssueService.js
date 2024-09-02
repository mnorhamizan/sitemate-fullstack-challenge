"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueService = void 0;
class IssueService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAllIssues() {
        return this.repository.findAll();
    }
    async getIssueById(id) {
        return this.repository.findById(id);
    }
    async createIssue(issue) {
        return this.repository.create(issue);
    }
    async updateIssue(id, issue) {
        return this.repository.update(id, issue);
    }
    async deleteIssue(id) {
        return this.repository.delete(id);
    }
}
exports.IssueService = IssueService;
