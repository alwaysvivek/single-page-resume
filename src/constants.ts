import { Project, Experience, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'agentic-research-assistant',
    title: 'Agentic Research Assistant',
    description: 'A full-stack AI research assistant using self-correcting agentic workflows for high-confidence answers.',
    longDescription: 'Built to solve the "Hallucination Problem" in RAG systems, this assistant uses LangGraph to implement a multi-step, self-correcting researcher. It employs a "Plan-and-Execute" pattern where the agent recursively searches documents, grades retrieved context, and rewrite queries until a high confidence score is achieved.',
    challenges: [
      'Orchestrating complex state-based loops with LangGraph',
      'Implementing semantic relevance grading for retrieved chunks',
      'Minimizing latency in multi-turn self-correction cycles'
    ],
    results: [
      'Significant reduction in hallucination rates through agentic loops',
      'Confidence-scored answers with cited primary sources',
      'Seamless local integration with ChromaDB and Ollama'
    ],
    tech: ['Python', 'LangGraph', 'FastAPI', 'React', 'Vector DBs'],
    link: 'https://github.com/alwaysvivek/agentic-research-assistant',
    isGithubOnly: true,
    domain: 'Artificial Intelligence',
    subdomain: 'Full-Stack Orchestration',
  },
  {
    id: 'ai-workflow-builder',
    title: 'AI Workflow Builder',
    description: 'Workflow builder powered by Groq & Flask for highly deterministic and validated LLM chains.',
    longDescription: 'This project focuses on architectural rigor in AI applications. It leverages a Prompts Registry to decouple execution logic from LLM instructions and enforces strict Pydantic JSON schemas on all model outputs. The security model follows an ephemeral "Bring Your Own Key" (BYOK) pattern to protect user credentials.',
    challenges: [
      'Enforcing strict JSON structure on non-deterministic LLM responses',
      'Decoupling "Action" behavior from the core Python runtime',
      'Implementing secure, ephemeral API key handling with custom headers'
    ],
    results: [
      '100% deterministic UI state through strict Pydantic validation schemas',
      'Zero-setup friction via SQLite/SQLAlchemy abstraction',
      'Flexible automation engine with extensible prompt registry'
    ],
    tech: ['Flask', 'Groq', 'Pydantic', 'SQLite'],
    link: 'https://ai-workflow-builder-l1xs.onrender.com/',
    githubLink: 'https://github.com/alwaysvivek/ai-workflow-builder',
    domain: 'Artificial Intelligence',
    subdomain: 'Full-Stack Development',
  },
  {
    id: 'ecoyaan-checkout',
    title: 'Ecoyaan Checkout Flow',
    description: 'Responsive e-commerce checkout flow built with SSR and optimized state management.',
    longDescription: 'Developed for Ecoyaan, this checkout flow prioritizes performance and seamless UX. It utilizes selector-based Zustand subscriptions for lightning-fast UI updates and Next.js SSR for optimized initial loads. The architecture replaces heavy Context Providers with lightweight, decoupled hooks for better scalability.',
    challenges: [
      'Managing persistent shipping state across multi-step checkout pages',
      'Balancing high-performance SSR with client-side state hydration',
      'Implementing real-time field validation without blocking the main thread'
    ],
    results: [
      'Zero-latency checkout transitions using Zustand selectors',
      '100% accessible UI with WCAG-compliant form validation',
      'Optimized data fetching pattern using Server Components and mock REST APIs'
    ],
    tech: ['Next.js', 'Zustand', 'Tailwind CSS', 'Server-Side Rendering'],
    link: 'https://vivek-ecoyaan-nextjs-checkout.vercel.app/',
    githubLink: 'https://github.com/alwaysvivek/vivek-ecoyaan-nextjs-checkout',
    domain: 'Full-Stack Development',
  },
  {
    id: 'aira-client-os',
    title: 'Aira Client OS',
    description: 'Frontend monolith and system architecture solving "Automation Uncertainty" in human-AI interaction.',
    longDescription: 'Developed as a high-stakes take-home assessment, I transformed a complex AI orchestration system from a "black box" into a transparent, trusted workspace. I implemented a live pulse indicator for service health and a template-driven rule engine to bridge the gap between complex background automation and intuitive UX.',
    challenges: [
      'Fragmented onboarding flow for multi-account connections (WA, Gmail, Calendar)',
      'Lack of real-time visibility in 24/7 background automation tasks',
      'Scaling cross-tab state management for live health pulses via TanStack Query'
    ],
    results: [
      'Unified manual actions and AI suggestions into a high-performance Hub',
      'Shipped working improvements that eliminated silent failures via live pulse monitoring',
      'Implemented a template injection system to reduce initial onboarding friction'
    ],
    tech: ['Next.js', 'React Native', 'Turborepo', 'TypeScript', 'TanStack Query', 'Zustand'],
    link: 'https://github.com/alwaysvivek/aira-client-os',
    isGithubOnly: true,
    domain: 'Full-Stack Development',
    subdomain: 'AI Orchestration',
  },
  {
    id: 'wind-forecast-monitor',
    title: 'Wind Forecast Monitor',
    description: 'BMRS-powered monitor for UK wind power generation. Note: Open the backend first to wake up the server before viewing the live project.',
    longDescription: 'A high-fidelity dashboard solving the "data opacity" problem in renewable energy forecasting. Note: This is an async backend-first application. Please open the Backend Link first to wake up the Render instance, then click "Live Demo" to view the dashboard. It fetches and aligns disparately sampled time-series data from the Elexon BMRS API (FUELHH and WINDFOR streams).',
    challenges: [
      'Aligning disparately sampled time-series data from fuel-specific BMRS streams',
      'Implementing a configurable forecast horizon slider (0-48h) with real-time alignment',
      'Orchestrating modular FastAPI microservices for large-scale data ingestion and processing'
    ],
    results: [
      'Interactive dashboard with sub-millisecond chart rendering using Next.js and Recharts',
      'Detailed analytical breakdown of error characteristics (MAE, Median, P99 variance)',
      'Optimized data pipeline ensuring zero-plot rendering for missing forecast datasets'
    ],
    tech: ['Next.js', 'FastAPI', 'Pandas', 'Recharts', 'Pydantic'],
    link: 'https://wind-forecast-monitor-1mxaak3kx-alwaysviveks-projects.vercel.app/',
    githubLink: 'https://github.com/alwaysvivek/wind-forecast-monitor',
    backendLink: 'https://wind-forecast-monitor.onrender.com/',
    domain: 'Systems Engineering',
    subdomain: 'Data Visualization',
  },
  {
    id: 'xbasic',
    title: 'XBasic',
    description: 'A Python-based, extended interpretation of the BASIC language, featuring a custom hand-written compiler and interpreter.',
    longDescription: 'XBasic is a deep-dive into compiler theory and language design. It features a custom language specification with a hand-written Lexer, Recursive-Descent Parser, and AST-based evaluation engine. The project explores the intricacies of scope management, variable binding, and expression evaluation in a dynamic environment.',
    challenges: [
      'Implementing recursive-descent parsing for complex nested math expressions',
      'Designing a robust symbol table for variable scope and life-cycle management',
      'Minimizing interpretation overhead through AST-based optimization passes'
    ],
    results: [
      'Successfully implemented a fully-functional BASIC variant with support for modern constructs',
      'Extensible compiler architecture supporting Functions, Loops, and Conditionals',
      'Modular code structure allowing for easy addition of new language features'
    ],
    tech: ['Python', 'Compiler Design', 'Parsing', 'AST'],
    link: 'https://pypi.org/project/xbasic/',
    githubLink: 'https://github.com/alwaysvivek/xbasic',
    linkLabel: 'PyPI',
    domain: 'Systems Engineering',
  },
  {
    id: 'stress-tracker-ai',
    title: 'StressTracker AI',
    description: 'Real-time AI stress tracker using mouse & keystroke dynamics. Privacy-first, local-only, and 100% offline.',
    longDescription: 'StressTracker AI detects Sympathetic Nervous System (SNS) activation using passive behavioral biometrics. By tracking mouse jitter, path efficiency, and keystroke flight time variance (ISO 9241-11), it calculates Z-scores to assess cognitive load. The data is processed in real-time through an in-memory buffer and analyzed by a local Llama-3.2 model.',
    challenges: [
      'Filtering noise from raw peripheral input streams (923k events/sec)',
      'Implementing real-time kinematic analysis without OS lag',
      'Securing a 100% offline pipeline for sensitive behavioral data'
    ],
    results: [
      'High-throughput feature extraction pipeline optimized for Silicon',
      'Actionable mental health insights through a clinical AI persona',
      'Privacy-first architecture ensuring zero raw data leakage'
    ],
    tech: ['Python', 'Llama-3.2', 'Streamlit', 'Silicon Optimization'],
    link: 'https://github.com/alwaysvivek/stress-tracker-ai',
    isGithubOnly: true,
    domain: 'Artificial Intelligence',
  },
  {
    id: 'tiny-git',
    title: 'Tiny Git',
    description: 'A lightweight Git internals visualizer. Parses .git objects directly to map the Directed Acyclic Graph (DAG).',
    longDescription: 'Implemented to demystify Git internals, Tiny Git reimplements core plumbing commands in pure Python. It directly parses loose objects from the .git directory, handles zlib decompression, and SHA-1 hashing to reconstruct the Merkle tree. A force-directed React graph visualizes the history, allowing for deep inspection of blob and tree objects.',
    challenges: [
      'Parsing Git\'s binary object format without the Git CLI',
      'Optimizing DAG rendering for repos with 1000+ commits',
      'Implementing content-addressable storage logic in memory'
    ],
    results: [
      'Interactive visualization of Merkle Trees and Git plumbing',
      '<5ms retrieval time for complex commit graphs via caching',
      'Educational tool for understanding content-addressable storage'
    ],
    tech: ['Python', 'FastAPI', 'React', 'Zlib', 'SHA-1'],
    link: 'https://github.com/alwaysvivek/tiny-git',
    isGithubOnly: true,
    domain: 'Systems Engineering',
  },
  {
    id: 'deepgrep',
    title: 'DeepGrep',
    description: 'grep as an API, plus AI-powered semantic search with custom regex engine.',
    longDescription: 'DeepGrep upgrades the classic tool with a REST API and semantic context. It features a custom Regex Engine implemented from scratch, supporting capture groups and backreferences. It complements this with SpaCy-powered semantic search, which uses vector similarity to find contextually relevant matches, avoiding antonyms via WordNet integration.',
    challenges: [
      'Building a state-based regex matcher with full quantifier support',
      'Integrating POS (Part-of-Speech) filtering for semantic accuracy',
      'Managing persistent search history and analytics in SQLite'
    ],
    results: [
      'Unified search API combining exact regex and neural meaning',
      'Highly performant custom engine with state caching',
      'Integrated web UI for real-time history tracking and filtering'
    ],
    tech: ['Python', 'FastAPI', 'SpaCy', 'Regex'],
    link: 'https://github.com/alwaysvivek/deepgrep',
    isGithubOnly: true,
    domain: 'Systems Engineering',
    subdomain: 'NLP & Search',
  },
  {
    id: 'resp-server',
    title: 'RESP Server',
    description: 'Pure-Python implementation of a Redis-compatible server for local development and unit testing.',
    longDescription: 'A lightweight, embeddable RESP-compliant server designed to replace mocking in unit tests. It implements the Redis Serialization Protocol (RESP) from scratch using Python\'s AsyncIO for high concurrency. Supported features include Strings with TTL, Lists, Streams, and a full Pub/Sub system.',
    challenges: [
      'Parsing the multi-bulk RESP protocol efficiently in an async loop',
      'Designing a thread-safe in-memory datastore for concurrent clients',
      'Matching exact Redis behavior for complex stream operations'
    ],
    results: [
      'Drop-in replacement for Redis in Python-based test suites',
      'Lightweight memory footprint compared to official Redis binaries',
      'Modular architecture separating TCP logic from the command router'
    ],
    tech: ['Python', 'AsyncIO', 'RESP Protocol'],
    link: 'https://pypi.org/project/resp-server/',
    githubLink: 'https://github.com/alwaysvivek/resp-server',
    linkLabel: 'PyPI',
    domain: 'Systems Engineering',
  },
  {
    id: 'evolving-ai-biosphere',
    title: 'Evolving AI Biosphere',
    description: 'A self-evolving AI biosphere leveraging LSTM and REINFORCE algorithms for emergent adaptation.',
    longDescription: 'A neural simulation where AI agents must survive in a resource-constrained environment. It explores emergent behaviors through reinforcement learning, using Long Short-Term Memory (LSTM) networks to manage historical state and the REINFORCE algorithm for policy optimization based on survival metrics.',
    challenges: [
      'Balancing sparse rewards in a complex survival environment',
      'Managing gradient stability in LSTM-based policy networks',
      'Simulating multiple agents with discrete state spaces'
    ],
    results: [
      'Observation of emergent foraging and social adaptation strategies',
      'Scalable simulation engine with PyTorch-backed inference',
      'Stable reproduction of evolutionary biology patterns in code'
    ],
    tech: ['Python', 'PyTorch', 'LSTM', 'Reinforcement Learning'],
    link: 'https://github.com/alwaysvivek/evolving-ai-biosphere',
    isGithubOnly: true,
    domain: 'Artificial Intelligence',
  },
  {
    id: 'jobs',
    title: 'Jobs - Next.js 15 Rewrite',
    description: 'A modern, high-performance job board re-imagining the classic "Let\'s Build" series with the latest React ecosystem.',
    longDescription: 'A complete rewrite of a classic Rails monolith, this project reimagines full-stack development using the modern React ecosystem. It utilizes Next.js 15 Server Actions for data mutations, TanStack Query for client-side state, and Prisma ORM for type-safe database access, resulting in a significantly leaner and more performant architecture.',
    challenges: [
      'Migrating from a monolithic MVC to a modern component-driven SPA',
      'Implementing type-safe database queries with Prisma and Zod',
      'Optimizing SEO and performance using Next.js Server Components'
    ],
    results: [
      '95+ Lighthouse score across Performance and Accessibility',
      'Robust authentication system via NextAuth.js integration',
      'Highly scalable data flow using Server Actions and TanStack Query'
    ],
    tech: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com/alwaysvivek/jobs',
    isGithubOnly: true,
    domain: 'Full-Stack Development',
  },
  {
    id: 'event-management',
    title: 'Event Management Dashboard',
    description: 'Centralized dashboard for event orchestration and attendee logistics, featuring real-time occupancy tracking.',
    longDescription: 'A full-stack solution for event organizers to manage schedules, venues, and registrations in real-time. I implemented a robust backend to handle concurrent registrations and a real-time occupancy tracking system, focusing on high-performance state synchronization across complex layout views.',
    challenges: [
      'Managing concurrent state updates during peak registration periods',
      'Designing an intuitive multi-calendar view for venue scheduling',
      'Implementing secure role-based access control for event staff'
    ],
    results: [
      'Centralized event orchestration with zero-lag state synchronization',
      'Streamlined attendee check-in workflow reducing wait times by 50%',
      'Detailed analytics dashboard for post-event performance review'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/alwaysvivek/event-management-system',
    isGithubOnly: true,
    domain: 'Full-Stack Development',
  },
  {
    id: 'tactacai',
    title: 'TacTacAI',
    description: 'Command-line Tic Tac Toe with Minimax-powered AI and modular architecture.',
    longDescription: 'A study in software engineering principles and game theory. Features a robust error-handling system, modular code, and an AI opponent that uses the Minimax algorithm with alpha-beta pruning concepts to ensure unbeatable play. The project demonstrates how to structure CLI applications for maximum maintainability.',
    challenges: [
      'Implementing a recursive minimax engine with optimal move scoring',
      'Designing a modular CLI interface that is agnostic to the game engine',
      'Ensuring robust handling of invalid user inputs in a fast-paced loop'
    ],
    results: [
      'Unbeatable AI opponent capable of optimal play in all scenarios',
      'Clean, object-oriented codebase with clear separation of concerns',
      'Package-ready CLI tool with zero external dependencies'
    ],
    tech: ['Python', 'Minimax', 'CLI Development'],
    link: 'https://pypi.org/project/tactacai/',
    githubLink: 'https://github.com/alwaysvivek/tactacai',
    linkLabel: 'PyPI',
    domain: 'Artificial Intelligence',
  },
  {
    id: 'compiler-toolchain',
    title: 'Compiler Toolchain',
    description: 'Custom compiler pipeline implementing lexical analysis, AST generation, and intermediate code optimization.',
    longDescription: 'A deep-dive into the mechanics of language translation and formal grammar. This toolchain implements the full compiler pipeline, from hand-written DFAs and lexical scanning with Lex to LALR(1) parsing with Yacc. It explores syntax tree construction, semantic validation, and intermediate representation (IR) mapping, providing a robust foundation for building custom domain-specific languages.',
    challenges: [
      'Implementing complex token recognition using Lex and regex',
      'Resolving shift/reduce conflicts in LALR(1) parser generators',
      'Mapping high-level grammar constructs to intermediate representations'
    ],
    results: [
      'Comprehensive understanding of the front-end compiler pipeline',
      'Validated experiments meeting strict technical guidelines',
      'Collection of reusable templates for lexical and syntax analysis'
    ],
    tech: ['Lex', 'Yacc', 'C', 'CS Theory'],
    link: 'https://github.com/alwaysvivek/compiler-toolchain',
    isGithubOnly: true,
    domain: 'Systems Engineering',
  },
];

export const SKILL_DOMAINS = [
  {
    name: 'Artificial Intelligence',
    stack: 'Agentic RAG, LangGraph, Multi-Agent Training, Edge AI',
    subcategories: [
      {
        name: 'AI Engineering',
        skills: ['LangGraph', 'Agentic Workflows', 'Self-Correcting RAG', 'Multi-Agent Training', 'Prompt Engineering']
      },
      {
        name: 'Inference & ML',
        skills: ['PyTorch', 'Llama 3.2', 'Ollama/VLLM', 'Reinforcement Learning', 'Vector DBs (LanceDB)', 'Hallucination Mitigation']
      }
    ]
  },
  {
    name: 'Systems Engineering',
    stack: 'Compilers, RESP, Architecture & Pedagogy',
    subcategories: [
      {
        name: 'Low-Level Dev',
        skills: ['Python (AsyncIO)', 'C++20', 'Go', 'Compiler Construction', 'RESP Protocol']
      },
      {
        name: 'Strategy & Leadership',
        skills: ['DX Optimization', 'Technical Writing', 'Architectural Code Reviews', 'Technical Mentorship'],
        linkTo: 'experience'
      },
      {
        name: 'Infrastructure',
        skills: ['TCP/IP Socket Programming', 'Git Internals', 'Linux Systems', 'Docker/Compose', 'GitHub Actions']
      }
    ]
  },
  {
    name: 'Full-Stack Development',
    stack: 'Next.js 15, React 19, FastAPI, SSE/WebSockets',
    subcategories: [
      {
        name: 'Frontend Architectures',
        skills: ['React 19', 'Next.js 15 (Server Actions)', 'TypeScript', 'Tailwind CSS', '⌘K Interface Design', 'SSE/WebSockets']
      },
      {
        name: 'Modern Backend',
        skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Playwright (E2E)', 'Vitest/Pytest']
      }
    ]
  }
];

export const SKILLS = SKILL_DOMAINS.flatMap(d => d.subcategories.flatMap(s => s.skills));

export const EXPERIENCE: Experience[] = [
  {
    role: "Technical Lead",
    entity: "Codeyoung & Exercism",
    focus: "Engineering Pedagogy — Scaling technical expertise across all proficiency levels by teaching systems thinking, clean code, and scalable design.",
    date: "Aug 2025 — Present",
    logo: "/exercism.png"
  },
  {
    role: "Systems Strategy",
    entity: "Delhi Police",
    focus: "1-Week Sprint: Monitored neighborhood surveillance architectures to detect and report local anomalies.",
    date: "Feb 2026",
    logo: "/delhi-police.png"
  },
  {
    role: "OSS Maintainer",
    entity: "Redis Ecosystem",
    focus: "Author of redlock-ng (Distributed Systems) — Officially featured in Redis Documentation",
    date: "Jan 2026 — Present"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of Helsinki",
    degree: "Full Stack Open",
    details: "Grade 5/5, Distinction"
  },
  {
    institution: "Galgotias University",
    degree: "B.Tech CS, Specialization in AI",
    details: "First Class Honors, CGPA 7.66"
  }
];

export const CERTS: Certification[] = [
  { name: "AI Engineer Associate", issuer: "DataCamp" },
  { name: "Postman API Student Expert", issuer: "Postman" },
  { name: "CS50x", issuer: "Harvard" },
  { name: "Google IT Automation", issuer: "Python" }
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vivek-dagar' },
  { label: 'GitHub', href: 'https://github.com/alwaysvivek' },
];
