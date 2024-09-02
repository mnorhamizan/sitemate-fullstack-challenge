"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryIssueRepository = void 0;
class InMemoryIssueRepository {
    constructor() {
        this.issues = [];
        this.nextId = 1;
    }
    async findAll() {
        return [...this.issues];
    }
    async findById(id) {
        return this.issues.find(issue => issue.id === id) || null;
    }
    async create(issueDto) {
        const now = new Date();
        const newIssue = {
            id: this.nextId++,
            ...issueDto,
            createdAt: now,
            updatedAt: now
        };
        this.issues.push(newIssue);
        console.log("Issue updated succesfully 🎉");
        console.log(newIssue);
        return newIssue;
    }
    async update(id, issueDto) {
        const index = this.issues.findIndex(i => i.id === id);
        if (index === -1)
            return null;
        const updatedIssue = {
            ...this.issues[index],
            ...issueDto,
            updatedAt: new Date()
        };
        this.issues[index] = updatedIssue;
        console.log("Issue updated succesfully 🎉");
        console.log(updatedIssue);
        return updatedIssue;
    }
    async delete(id) {
        const index = this.issues.findIndex(i => i.id === id);
        if (index === -1)
            return false;
        this.issues.splice(index, 1);
        return true;
    }
}
exports.InMemoryIssueRepository = InMemoryIssueRepository;
