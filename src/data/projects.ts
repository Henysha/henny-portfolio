export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    name: 'NebirroAPI',
    subtitle: 'Programmable financial infrastructure API',
    description:
      'A backend-first fintech platform with API keys, wallets, ledger-derived balances, transfers, idempotency, webhooks, React dashboard, E2E tests, and a TypeScript SDK.',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'React', 'Playwright', 'Jest'],
    githubUrl: 'https://github.com/Henysha/NebirroApi',
    imageUrl: 'https://raw.githubusercontent.com/Henysha/NebirroApi/main/docs/screenshots/dashboard.png',
  },
  {
    name: 'TrustGraph Engine',
    subtitle: 'Explainable risk, fraud, and reputation engine',
    description:
      'A deterministic fintech risk engine that scores transactions, explains decisions, creates fraud alerts, and routes suspicious activity into review cases.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'Docker', 'Pytest', 'Playwright'],
    githubUrl: 'https://github.com/Henysha/trustgraph-engine',
    imageUrl: 'https://raw.githubusercontent.com/Henysha/trustgraph-engine/main/docs/screenshots/dashboard.png',
  },
  {
    name: 'CapitalCircle',
    subtitle: 'Community capital and pooled finance platform',
    description:
      'A full-stack community finance platform for savings groups, pooled contributions, funding requests, approvals, and transparent ledger-based balances.',
    tech: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'JWT', 'Swagger', 'Flyway'],
    githubUrl: 'https://github.com/Henysha/capital-circle',
    imageUrl: 'https://raw.githubusercontent.com/Henysha/capital-circle/main/docs/screenshots/dashboard.png',
  },
];
