import { icons } from "@/components/icons";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#opensource" },
  { label: "Education", href: "#education" },
];

export const socialLinks = [
  {
    href: "https://github.com/Dev-Akshatgupta",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/debuggerakshat/",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/kya_yaarAkshat",
    label: "TwitterX",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "Cypress",
  "Gherkin",
  "StoryBook",
  "Jest/Vitest",
  "Vite",
  "Micro Frontend/MFE",
];

export const experienceContent = [
  {
    icon: icons.synchrony,
    name: "Synchrony Financials",
    since: "Aug 2022 - present",
    projects: [
      {
        title: "VISTA: Account Details (MFE)",
        bullets: [
          "Improved build times by up to 40% and enhanced development speed with faster Hot Module Replacement (HMR) and optimized bundling by successfully migrating applications from Create React App (CRA) to Vite.",
          "Transitioned the project from Jest to Cypress for end-to-end (E2E) testing, leveraging Cypress and Cucumber to implement behavior-driven development (BDD) principles for testing workflows.",
        ],
      },
      {
        title: "Syf-API-Library Mono-repo",
        bullets: [
          "Developed a dedicated repository to standardize types across all Micro Frontends (MFEs) and published it to our private library, ensuring consistency, reliability, and efficiency across applications.",
          "Used React Query/TanStack Query to write custom hooks that can be consumed by other applications, ensuring dependability and reducing redundant API calls across MFEs.",
          "Developed a mock data generator inside the syf-api-library using Mock Service Worker (MSW), enabling seamless testing of user stories on the fly and supporting the team in adopting and maintaining an Agile development workflow.",
          "Enabled sandbox environments with the mock data generator, reducing the effort required by developers to maintain their own mocks.",
        ],
      },
      {
        title: "Card Actions MFE",
        bullets: [
          "Developed a monorepo containing a small bundle of features used by different parent applications.",
          "Successfully migrated applications from Jest to Vitest, resulting in faster test execution times and improved developer productivity due to Vitest's enhanced performance, built-in TypeScript support, and better integration with Vite for optimized performance and build time.",
        ],
      },
      {
        title: "Account Card MFE",
        bullets: [
          "Implemented a Micro Frontend (MFE) strategy that streamlined the integration of new features, reducing onboarding time for new developers by 25% and fostering a more agile development environment. This led to enhanced team productivity and morale.",
          "Optimized the story creation process by introducing Gherkin syntax for writing Acceptance Criteria, ensuring a consistent and clear source of truth accessible to all team members.",
        ],
      },
    ],
  },
];
