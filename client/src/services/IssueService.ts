import axios from 'axios'

const API_URL = 'http://localhost:3000/issues'

export interface Issue {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface CreateIssueDto {
  title: string
  description: string
}

export interface UpdateIssueDto {
  title?: string
  description?: string
}

export class IssueService {
  async getAllIssues(): Promise<Issue[]> {
    const response = await axios.get<Issue[]>(API_URL)
    return response.data
  }

  async getIssueById(id: number): Promise<Issue> {
    const response = await axios.get<Issue>(`${API_URL}/${id}`)
    return response.data
  }

  async createIssue(issue: CreateIssueDto): Promise<Issue> {
    const response = await axios.post<Issue>(API_URL, issue)
    return response.data
  }

  async updateIssue(id: number, issue: UpdateIssueDto): Promise<Issue> {
    const response = await axios.put<Issue>(`${API_URL}/${id}`, issue)
    return response.data
  }

  async deleteIssue(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`)
  }
}

export const issueService = new IssueService()
