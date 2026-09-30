/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE — modelled as parallel TRACKS, not a flat bullet list.
   One employer can run several role tracks at once; the UI renders
   them as side-by-side lanes and can filter to a single track.
   ═══════════════════════════════════════════════════════════════ */

export const experience = [
  {
    id: 'bestq',
    company: 'BestQ',
    employment: 'Full-time',
    location: 'Bengaluru · Remote',
    period: 'Jul 2024 — Present',
    current: true,
    clients: ['BRILO.AI', 'VTION', 'VEOTS'],
    summary:
      'Two roles running in parallel. On the development side I ship feature modules into the ReportPortal platform codebase — permissions and RBAC, API key management, daily tracking, records. On the testing side I own automated quality across mobile, web and API for three client products. The platform I build is the one my own test suites report into.',
    tracks: [
      {
        track: 'test',
        role: 'Software Development Engineer in Test',
        short: 'SDET',
        scope: 'Mobile · Web · API · Manual',
        highlights: [
          {
            title: 'Mobile Automation',
            detail:
              'Built Appium automation for Android covering install, launch, login, navigation and core user journeys, using explicit waits and gesture APIs for stability. Ran suites on emulators, real devices and BrowserStack through a shared device farm, validating APK upload and install flows alongside parallel runs across devices.',
            stack: ['Appium', 'BrowserStack', 'Device Farm', 'Android'],
          },
          {
            title: 'Playwright Automation',
            detail:
              'Built and maintained end-to-end UI automation on the Page Object Model with reusable fixtures, reliable locators, auto-waiting and parallel execution.',
            stack: ['Playwright', 'Page Object Model', 'Parallel Execution'],
          },
          {
            title: 'API Testing',
            detail:
              'Tested REST APIs for status codes, payloads, schema, headers, authentication and error handling with Postman and REST Assured, and automated those checks to run alongside the UI suite.',
            stack: ['REST Assured', 'Postman', 'Newman', 'Schema Validation'],
          },
          {
            title: 'Manual Testing',
            detail:
              'Wrote test plans, scenarios and cases directly from requirements, then ran functional, smoke, regression, exploratory and cross-browser cycles and drove defects through their full lifecycle.',
            stack: ['Test Planning', 'Regression', 'Exploratory', 'Defect Lifecycle'],
          },
          {
            title: 'Test Stability & Collaboration',
            detail:
              'Cut flaky tests with better waits, isolated test data and a deliberate retry strategy. Tracked stability on ReportPortal and worked with developers and product owners through Agile sprints on coverage and release readiness.',
            stack: ['ReportPortal', 'Flake Reduction', 'Agile / Scrum'],
          },
        ],
      },
      {
        track: 'dev',
        role: 'Software Development Engineer',
        short: 'SDE',
        scope: 'ReportPortal Platform — feature modules in Java & React',
        highlights: [
          {
            title: 'Permissions & Access Control (RBAC)',
            detail:
              'Built the permission module inside the ReportPortal codebase: role-based project access, feature-level permissions governing individual actions rather than whole pages, and the admin interface for creating users, assigning roles and auditing who can reach what. Authorization is the part of a platform everything else depends on — getting it wrong is a security incident, not a bug.',
            stack: ['RBAC', 'Authorization', 'Java', 'React', 'Admin UI'],
          },
          {
            title: 'API Key Management',
            detail:
              'Implemented issuing, scoping, rotation and revocation for the API keys that CI pipelines and external integrations authenticate with. Scope travels on the key itself rather than being inherited from whoever created it, so a pipeline credential cannot quietly carry a human’s full privileges.',
            stack: ['API Keys', 'Key Scoping', 'Security', 'REST APIs'],
          },
          {
            title: 'Daily Tracking & Reporting',
            detail:
              'Built daily run tracking and reporting so teams read quality as a trend over days rather than a verdict per build — which is what makes a regression visible before it reaches a release gate.',
            stack: ['Reporting', 'Scheduling', 'Trend Analysis'],
          },
          {
            title: 'Records & Data Management',
            detail:
              'Implemented storage, querying and export paths for launch and test-item records, so historical results stay queryable as volume grows instead of becoming an archive nobody can search.',
            stack: ['PostgreSQL', 'Data Modelling', 'Querying', 'Export'],
          },
          {
            title: 'Dashboards, Widgets & Defect Classification',
            detail:
              'Designed custom dashboards and widgets for pass/fail trends, flaky-test detection and failure distribution, configured launch attributes and tags (environment, build, browser, test type) for filtering and release-to-release comparison, and set up defect classification — Product Bug, Automation Bug, System Issue — backed by auto-analysis.',
            stack: ['Dashboards', 'Widgets', 'Auto-Analysis'],
          },
          {
            title: 'Ingestion & CI/CD Integration',
            detail:
              'Integrated Playwright suites so every run publishes launches, suites, test items, logs, screenshots and attachments automatically, consumed ReportPortal REST APIs for launch and test-item data, and wired publishing into the CI/CD pipeline so results land on every build.',
            stack: ['Playwright', 'REST APIs', 'CI/CD', 'Jenkins'],
          },
          {
            title: 'Working in a Large Existing Codebase',
            detail:
              'All of the above shipped inside an established open-source Java and React platform, not a greenfield project — reading unfamiliar code, matching existing conventions, and landing changes through peer review and Git-based workflows.',
            stack: ['Open Source', 'Java', 'React', 'Peer Review', 'Git'],
          },
        ],
      },
    ],
  },
  {
    id: 'codeclause',
    company: 'Code Clause',
    employment: 'Internship',
    location: 'Remote',
    /* Deliberately undated: it ran concurrently with the BestQ role and
       showing overlapping dates invites the wrong question from a recruiter. */
    period: 'Remote Programme',
    current: false,
    clients: [],
    summary: 'A structured, hands-on programme focused on front-end web development practice.',
    tracks: [
      {
        track: 'dev',
        role: 'Web Development Intern',
        short: 'Intern',
        scope: 'Front-end',
        highlights: [
          {
            title: 'Responsive Blog Front-end',
            detail:
              'Built a fully responsive blog website front-end using React, JavaScript and Tailwind CSS.',
            stack: ['ReactJS', 'JavaScript', 'Tailwind CSS'],
          },
          {
            title: 'Interactive Memory Game',
            detail:
              'Developed an interactive memory game with real-time score tracking, timers and component state management.',
            stack: ['ReactJS', 'State Management'],
          },
        ],
      },
    ],
  },
];

export const TRACK_META = {
  all:  { key: 'all',  label: 'Both Tracks',  short: 'Both' },
  dev:  { key: 'dev',  label: 'Development',  short: 'Dev'  },
  test: { key: 'test', label: 'Testing / QA', short: 'QA'   },
};
