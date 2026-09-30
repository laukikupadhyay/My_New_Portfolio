/* ═══════════════════════════════════════════════════════════════
   PROJECTS — two tiers.
   `professional` = work shipped at BestQ, expandable to case-study depth.
   `personal`     = self-directed builds with public repos.
   Every item carries a `track` so the dual-track filter reaches here too.
   ═══════════════════════════════════════════════════════════════ */

export const professional = [
  {
    id: 'reportportal',
    track: 'dev',
    title: 'ReportPortal Platform — Feature Modules',
    kind: 'Platform Engineering',
    org: 'BestQ',
    period: '2024 — Present',
    blurb:
      'Feature modules shipped into the ReportPortal codebase itself — permissions and RBAC, API key management, daily tracking and records — written in Java and React inside an established open-source platform.',
    context:
      'ReportPortal is a large, mature open-source test reporting platform with an existing Java service layer and React front-end. The work was not to integrate it from the outside but to extend it from the inside: read an unfamiliar codebase, match its conventions, and land production modules through peer review.',
    challenge:
      'The platform needed access control that teams could actually be trusted with. Multiple client teams share one deployment, CI pipelines need credentials that are not tied to a person, historical records need to stay queryable as they grow, and quality needs to read as a daily trend rather than a per-build verdict.',
    approach: [
      'Built the permission module: role-based project access, plus feature-level permissions that govern individual actions rather than whole pages.',
      'Built the admin interface for creating users, assigning roles and auditing who can reach what.',
      'Implemented API key management — issuing, scoping, rotation and revocation — for the keys CI pipelines and integrations authenticate with.',
      'Scoped permissions onto the key itself rather than inheriting them from its creator, so a pipeline credential cannot silently carry a human’s full privileges.',
      'Built daily run tracking and reporting so regressions surface as a trend before they reach a release gate.',
      'Implemented storage, querying and export paths for launch and test-item records so history stays searchable as volume grows.',
      'Designed dashboards and widgets for pass/fail trends, flaky-test detection and failure distribution, with launch attributes and tags for filtering.',
      'Set up defect classification (Product Bug, Automation Bug, System Issue) with auto-analysis, and wired publishing into CI/CD so results land on every build.',
    ],
    outcome: [
      'Authorization became explicit and auditable — who can do what is a configured role, not an informal convention.',
      'CI credentials carry their own bounded scope, independent of the person who created them.',
      'Historical results stay queryable and exportable instead of becoming an archive nobody can search.',
      'Quality reads as a daily trend, and failures arrive pre-classified so triage starts from a category rather than a stack trace.',
    ],
    stack: [
      'Java', 'React', 'RBAC', 'Authorization', 'API Keys', 'PostgreSQL',
      'REST APIs', 'ReportPortal', 'CI/CD', 'Jenkins',
    ],
  },
  {
    id: 'mobile-suite',
    track: 'test',
    title: 'Android Mobile Automation Suite',
    kind: 'Automation Framework',
    org: 'BestQ',
    period: '2024 — Present',
    blurb:
      'Appium automation covering the full Android journey — install, launch, login, navigation and core flows — across emulators, real devices and BrowserStack.',
    context:
      'Mobile releases were validated by hand across a spread of devices and OS versions, which made full regression slow and inconsistent between runs.',
    challenge:
      'Automate the critical Android journeys so they run unattended, in parallel, on real hardware as well as emulators — and stay stable enough that people trust a red result.',
    approach: [
      'Built Appium automation covering install, launch, login, navigation and core user journeys.',
      'Used explicit waits and gesture APIs to stabilise interactions that native timing makes brittle.',
      'Ran suites against emulators, real devices and BrowserStack through a shared device farm.',
      'Validated APK upload and install flows as part of the automated path.',
      'Enabled parallel runs across devices for cross-device and cross-OS coverage.',
    ],
    outcome: [
      'Core Android journeys verified automatically instead of by hand.',
      'Cross-device and cross-OS coverage without multiplying manual effort.',
      'Stability work with waits, isolated data and a retry strategy cut flaky failures.',
    ],
    stack: ['Appium', 'Appium Inspector', 'BrowserStack', 'Device Farm', 'Android', 'Java'],
  },
  {
    id: 'playwright-framework',
    track: 'test',
    title: 'Playwright E2E Automation Framework',
    kind: 'Automation Framework',
    org: 'BestQ',
    period: '2024 — Present',
    blurb:
      'End-to-end web automation on the Page Object Model, with reusable fixtures, reliable locators and parallel execution — published straight into ReportPortal.',
    context:
      'Web regression needed to keep pace with an Agile release cadence across multiple client products.',
    challenge:
      'Build a suite that is fast enough to run every build, structured enough that new tests are cheap to add, and stable enough that failures mean something.',
    approach: [
      'Structured the suite on the Page Object Model so page changes touch one file, not fifty tests.',
      'Built reusable fixtures for setup, auth and test-data isolation.',
      'Chose resilient locators and leaned on auto-waiting rather than fixed sleeps.',
      'Enabled parallel execution to keep full-suite runtime inside the CI window.',
      'Automated API checks with REST Assured and Postman alongside the UI layer.',
      'Published every run into ReportPortal for trend and flake tracking.',
    ],
    outcome: [
      'End-to-end coverage running on every build through CI/CD.',
      'New test authoring reduced to composing existing page objects and fixtures.',
      'UI and API verification reported through one dashboard.',
    ],
    stack: ['Playwright', 'Page Object Model', 'TestNG', 'REST Assured', 'Postman', 'ReportPortal'],
  },
];

export const personal = [
  {
    id: 'courier',
    track: 'dev',
    title: 'Courier & Logistics Tracking System',
    kind: 'Backend System',
    period: 'Apr 2024 — May 2024',
    featured: true,
    blurb:
      'Shipment tracking across the full delivery lifecycle — customers, warehouses, delivery agents, packages, payments and tracking history.',
    bullets: [
      'Console-based courier tracking system in Java applying core OOP principles.',
      'Normalised PostgreSQL schema across Customer, Warehouse, Delivery Agent, Package, Payment and Tracking entities.',
      'Modelled one-to-many and many-to-one relationships between all six entity groups.',
      'Shipment lifecycle tracking with status enums and timestamp-based history.',
      'Java Collections Framework for in-memory filtering before persistence.',
    ],
    stack: ['Java', 'PostgreSQL', 'SQL', 'OOP', 'Collections Framework'],
    github: 'https://github.com/laukikupadhyay/Courier-logistics.git',
    live: null,
  },
  {
    id: 'abcs-makeup',
    track: 'dev',
    title: 'ABCs of Make-Up',
    kind: 'Full-Stack Web App',
    period: 'Feb 2024 — Mar 2024',
    featured: true,
    blurb:
      'A full-stack beauty tutorial platform with a ReactJS front-end, Java backend logic and PostgreSQL persistence.',
    bullets: [
      'Full-stack web application with Java backend logic and a ReactJS front-end.',
      'PostgreSQL database designed for users, tutorials and contact-form data.',
      'REST-style request and response handling implemented in Java.',
      'Contact form that persists user queries for follow-up.',
    ],
    stack: ['Java', 'ReactJS', 'PostgreSQL', 'SQL', 'REST'],
    github: 'https://github.com/laukikupadhyay/ABCs_OF_MakeUp.git',
    live: 'https://ab-cs-of-make-up.vercel.app/',
  },
  {
    id: 'repo-viewer',
    track: 'dev',
    title: 'GitHub Repo Viewer',
    kind: 'API Integration',
    period: 'Oct 2024 — Nov 2024',
    featured: false,
    blurb:
      'React app that fetches and displays any GitHub account’s repositories in a searchable, paginated dashboard.',
    bullets: [
      'GitHub REST API integration with server-side pagination for efficient data handling.',
      'Searchable, centralised repository dashboard built with Tailwind CSS.',
    ],
    stack: ['ReactJS', 'GitHub API', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/laukikupadhyay/GitHub_Repo_Viewer.git',
    live: 'https://github-tool-vert.vercel.app/',
  },
  {
    id: 'course-portal',
    track: 'dev',
    title: 'Tech-Course Portal',
    kind: 'Web Application',
    period: 'Apr 2023 — May 2023',
    featured: false,
    blurb:
      'Course discovery portal with comparison cards, a registration flow and a Spring Boot + MySQL backend.',
    bullets: [
      'Interactive course cards surfacing content, fees and duration for side-by-side comparison.',
      'Registration system persisting to MySQL through a Spring Boot backend.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/laukikupadhyay/Tech_Course_Portal.git',
    live: null,
  },
];
