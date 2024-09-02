export interface Issue {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateIssueDto = Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>;
  export type UpdateIssueDto = Partial<CreateIssueDto>;