export type ProjectCategory = 
  | 'All' 
  | 'Backend & APIs' 
  | 'Enterprise & SaaS' 
  | 'Local Problem Solving' 
  | 'Agritech & Data' 
  | 'Academic & Systems';

export type ProjectStatus = 
  | 'Flagship Prototype' 
  | 'Completed System' 
  | 'In Active Development' 
  | 'Functional Prototype' 
  | 'Academic Project' 
  | 'Archived';

export interface ArchitectureItem {
  layer: 'Frontend' | 'Backend' | 'Database' | 'Auth & Security' | 'APIs & Integration' | 'Business Logic';
  details: string;
}

export interface CaseStudyData {
  summary: string;
  problem: string;
  problemImportance: string;
  solution: string;
  keyFeatures: string[];
  architecture: ArchitectureItem[];
  databaseSchemaHighlights: string[];
  businessLogicHighlights: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  whatLearned: string[];
  futureRoadmap: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ProjectCategory;
  secondaryCategories: string[];
  status: ProjectStatus;
  isFeatured: boolean;
  featuredOrder?: number;
  role: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  overview: string;
  metricsOrScope: string;
  caseStudy: CaseStudyData;
}

export interface SkillItem {
  name: string;
  context: string;
  highlight?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  level: 'Core Working Stack' | 'Working Knowledge' | 'Tools & Infrastructure' | 'Systems & Support';
  skills: SkillItem[];
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: 'Education' | 'Technical Milestone' | 'Community & Leadership' | 'Independent Engineering';
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  isOngoing?: boolean;
}

export interface TargetRole {
  title: string;
  scope: string;
  alignment: string;
  relevantSkills: string[];
}
