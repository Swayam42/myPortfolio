export type Difficulty = 'Basic' | 'Intermediate' | 'Advanced'|'Easy'|'Medium'|'Difficult';

export type ProjectCategory = 'DSA Projects' | 'Web Projects' | 'Mobile Projects' | 'Other Projects';

export type DSASubcategory = 
  | 'Arrays' 
  | 'Linked Lists' 
  | 'Stacks' 
  | 'Queues' 
  | 'Trees' 
  | 'Graphs' 
  | 'Hash Tables'
  | 'Sorting'
  | 'Searching'
  | 'Dynamic Programming';

export type Project = {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  category: ProjectCategory;
  subcategory?: DSASubcategory;
  difficulty?: Difficulty;
  technologies: string[];
  date: string;
  featured?: boolean;
};