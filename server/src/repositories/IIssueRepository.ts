import { Issue, CreateIssueDto, UpdateIssueDto } from '../models/Issue';

export interface IIssueRepository {
  findAll(): Promise<Issue[]>;
  findById(id: number): Promise<Issue | null>;
  create(issue: CreateIssueDto): Promise<Issue>;
  update(id: number, issue: UpdateIssueDto): Promise<Issue | null>;
  delete(id: number): Promise<boolean>;
}