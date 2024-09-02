import { Issue, CreateIssueDto, UpdateIssueDto } from '../models/Issue';
import { IIssueRepository } from '../repositories/IIssueRepository';

export class IssueService {
  constructor(private repository: IIssueRepository) {}

  async getAllIssues(): Promise<Issue[]> {
    return this.repository.findAll();
  }

  async getIssueById(id: number): Promise<Issue | null> {
    return this.repository.findById(id);
  }

  async createIssue(issue: CreateIssueDto): Promise<Issue> {
    return this.repository.create(issue);
  }

  async updateIssue(id: number, issue: UpdateIssueDto): Promise<Issue | null> {
    return this.repository.update(id, issue);
  }

  async deleteIssue(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}