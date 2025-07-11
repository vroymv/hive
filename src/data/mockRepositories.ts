import { Repository } from "@/types/wizard";

export const mockRepositories: Repository[] = [
  {
    id: 1,
    name: "my-awesome-project",
    full_name: "user/my-awesome-project",
    description: "A really cool project with amazing features",
    private: false,
    fork: false,
    stargazers_count: 42,
    watchers_count: 15,
    language: "TypeScript",
    default_branch: "main",
    updated_at: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "api_v2_backend",
    full_name: "user/api_v2_backend",
    description: "Backend API service with modern architecture",
    private: true,
    fork: false,
    stargazers_count: 8,
    watchers_count: 3,
    language: "Python",
    default_branch: "develop",
    updated_at: "2024-01-14T15:45:00Z",
  },
  {
    id: 3,
    name: "ReactComponentLibrary",
    full_name: "user/ReactComponentLibrary",
    description: "Reusable React components for modern web apps",
    private: false,
    fork: true,
    stargazers_count: 156,
    watchers_count: 23,
    language: "JavaScript",
    default_branch: "master",
    updated_at: "2024-01-13T09:20:00Z",
  },
  {
    id: 4,
    name: "data-science-toolkit",
    full_name: "user/data-science-toolkit",
    description: "Collection of data science utilities and tools",
    private: false,
    fork: false,
    stargazers_count: 89,
    watchers_count: 12,
    language: "Python",
    default_branch: "main",
    updated_at: "2024-01-12T14:10:00Z",
  },
]; 