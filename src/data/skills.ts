export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'NestJS', 'REST APIs', 'JWT', 'service-layer architecture'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'responsive UI', 'protected routes'],
  },
  {
    category: 'Data / Database',
    skills: ['PostgreSQL', 'Prisma', 'SQLAlchemy', 'JPA', 'Flyway', 'ledger modeling'],
  },
  {
    category: 'DevOps / Testing',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Jest', 'Pytest', 'Playwright', 'MockMvc'],
  },
  {
    category: 'Fintech Concepts',
    skills: ['ledgers', 'wallet balances', 'idempotency', 'webhooks', 'risk scoring', 'funding workflows'],
  },
];
