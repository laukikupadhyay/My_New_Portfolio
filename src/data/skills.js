/* ═══════════════════════════════════════════════════════════════
   SKILLS — deliberately split into two parallel stacks.
   Entries with logo: null render a typographic monogram instead of
   a broken image, so no CDN gap ever shows as a hole in the grid.
   ═══════════════════════════════════════════════════════════════ */

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

/* ─────────────────────────── DEVELOPMENT ─────────────────────── */
export const devStack = {
  track: 'dev',
  eyebrow: 'What I build with',
  title: 'Development Stack',
  blurb:
    'The product side. Java and Spring Boot services behind REST APIs, persistence through Hibernate/JPA onto PostgreSQL, and ReactJS at the front.',
  groups: [
    {
      name: 'Languages',
      icon: 'code',
      focus: 'Core & Advanced Java is my primary language.',
      skills: [
        { name: 'Java',       logo: `${D}/java/java-original.svg`,             primary: true },
        { name: 'JavaScript', logo: `${D}/javascript/javascript-original.svg`, primary: true },
        { name: 'SQL',        logo: `${D}/mysql/mysql-original.svg` },
        { name: 'HTML5',      logo: `${D}/html5/html5-original.svg` },
        { name: 'CSS3',       logo: `${D}/css3/css3-original.svg` },
      ],
    },
    {
      name: 'Backend',
      icon: 'server',
      focus: 'REST services with layered architecture and role-based access control.',
      skills: [
        { name: 'Spring Boot',     logo: `${D}/spring/spring-original.svg`,         primary: true },
        { name: 'Spring MVC',      logo: `${D}/spring/spring-original.svg` },
        { name: 'Spring Security', logo: `${D}/spring/spring-original.svg` },
        { name: 'Hibernate',       logo: `${D}/hibernate/hibernate-original.svg` },
        { name: 'JPA',             logo: null },
        { name: 'REST APIs',       logo: null, primary: true },
      ],
    },
    {
      name: 'Frontend',
      icon: 'browser',
      focus: 'Component-driven React with utility-first styling.',
      skills: [
        { name: 'ReactJS',      logo: `${D}/react/react-original.svg`,             primary: true },
        { name: 'Tailwind CSS', logo: `${D}/tailwindcss/tailwindcss-original.svg` },
        { name: 'Bootstrap',    logo: `${D}/bootstrap/bootstrap-original.svg` },
      ],
    },
    {
      name: 'Databases',
      icon: 'database',
      focus: 'Normalised relational schemas and the queries that keep them fast.',
      skills: [
        { name: 'PostgreSQL', logo: `${D}/postgresql/postgresql-original.svg`, primary: true },
        { name: 'MySQL',      logo: `${D}/mysql/mysql-original.svg` },
      ],
    },
    {
      name: 'Build & Version Control',
      icon: 'branch',
      focus: 'Maven builds, containerised runtimes, Git-based team workflows.',
      skills: [
        { name: 'Maven',  logo: `${D}/maven/maven-original.svg` },
        { name: 'Docker', logo: `${D}/docker/docker-original.svg` },
        { name: 'Git',    logo: `${D}/git/git-original.svg`,       primary: true },
        /* devicon ships this mark black-on-transparent — it vanishes on a dark card. */
        { name: 'GitHub', logo: `${D}/github/github-original.svg`, invert: true },
      ],
    },
    {
      name: 'Engineering Concepts',
      icon: 'spark',
      focus: 'The fundamentals interviews actually probe.',
      skills: [
        { name: 'OOP',                   logo: null, primary: true },
        { name: 'Collections Framework', logo: null },
        { name: 'RBAC',                  logo: null },
        { name: 'Agile / Scrum',         logo: null },
        { name: 'Code Review',           logo: null },
        { name: 'Debugging',             logo: null },
      ],
    },
  ],
};

/* ──────────────────────────── TESTING ────────────────────────── */
export const testStack = {
  track: 'test',
  eyebrow: 'What I verify with',
  title: 'Testing & QA Stack',
  blurb:
    'The proof side. Automation across mobile, web and API — stabilised, parallelised, wired into CI/CD and reported through ReportPortal.',
  groups: [
    {
      name: 'Mobile Automation',
      icon: 'phoneMob',
      focus: 'Android journeys on emulators, real devices and a shared device farm.',
      skills: [
        { name: 'Appium',           logo: null, primary: true },
        { name: 'Appium Inspector', logo: null },
        { name: 'BrowserStack',     logo: null, primary: true },
        { name: 'Real Devices',     logo: null },
        { name: 'Device Farms',     logo: null },
        { name: 'Mobile Gestures',  logo: null },
        { name: 'APK Install Flows',logo: null },
      ],
    },
    {
      name: 'Web Automation',
      icon: 'browser',
      focus: 'End-to-end UI suites built on the Page Object Model.',
      skills: [
        { name: 'Playwright',       logo: null, primary: true },
        { name: 'Page Object Model',logo: null, primary: true },
        { name: 'TestNG',           logo: null },
        { name: 'JUnit',            logo: `${D}/junit/junit-original.svg` },
        { name: 'Parallel Execution', logo: null },
        { name: 'Reusable Fixtures',  logo: null },
      ],
    },
    {
      name: 'API Testing',
      icon: 'plug',
      focus: 'Status codes, payloads, schema, headers, auth and error paths.',
      skills: [
        { name: 'REST Assured',      logo: null, primary: true },
        { name: 'Postman',           logo: `${D}/postman/postman-original.svg`, primary: true },
        { name: 'Newman',            logo: null },
        { name: 'Schema Validation', logo: null },
        { name: 'Contract Testing',  logo: null },
      ],
    },
    {
      name: 'Manual QA',
      icon: 'clipboard',
      focus: 'Test design from requirements, and driving defects to closure.',
      skills: [
        { name: 'Test Planning',    logo: null, primary: true },
        { name: 'Test Case Design', logo: null },
        { name: 'Regression',       logo: null },
        { name: 'Smoke',            logo: null },
        { name: 'Exploratory',      logo: null },
        { name: 'Cross-browser',    logo: null },
        { name: 'Defect Lifecycle', logo: null },
        { name: 'Root-Cause Analysis', logo: null },
      ],
    },
    {
      name: 'Reporting & CI/CD',
      icon: 'gauge',
      focus: 'Every run publishes. Every failure gets classified.',
      skills: [
        { name: 'ReportPortal',     logo: null, primary: true },
        { name: 'Custom Dashboards',logo: null },
        { name: 'Auto-Analysis',    logo: null },
        { name: 'Failure Triage',   logo: null },
        { name: 'Jenkins',          logo: `${D}/jenkins/jenkins-original.svg`, primary: true },
        { name: 'CI/CD Pipelines',  logo: null },
      ],
    },
    {
      name: 'Tracking',
      icon: 'layers',
      focus: 'Where the work and the bugs live.',
      skills: [
        { name: 'Jira',   logo: `${D}/jira/jira-original.svg` },
        { name: 'Linear', logo: null },
      ],
    },
  ],
};
