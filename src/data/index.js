/* Barrel — every component imports from '../data' and nothing else. */
export { profile, socials, heroFacts, tenure, CAREER_START } from './profile';
export { devStack, testStack } from './skills';
export { experience, TRACK_META } from './experience';
export { professional, personal } from './projects';
export {
  pyramid, surfaces, defectTypes, dashboardWidgets,
  launchAttributes, stabilityPlaybook, snippets,
} from './testing';
export { education, certifications } from './credentials';

/* Section registry — single source of truth for order, nav and numbering.
   `navLabel: null` means the section is scroll-reachable but folded under
   the preceding nav entry, which keeps the navbar at seven items. */
export const SECTIONS = [
  { id: 'about',      num: '01', label: 'About',            navLabel: 'About',      track: null   },
  { id: 'dev-stack',  num: '02', label: 'Development Stack', navLabel: 'Stack',     track: 'dev'  },
  { id: 'test-stack', num: '03', label: 'Testing Stack',     navLabel: null,        track: 'test' },
  { id: 'experience', num: '04', label: 'Experience',        navLabel: 'Experience',track: null   },
  { id: 'testing',    num: '05', label: 'Testing & QA',      navLabel: 'Testing',   track: 'test' },
  { id: 'projects',   num: '06', label: 'Projects',          navLabel: 'Projects',  track: null   },
  { id: 'education',  num: '07', label: 'Education',         navLabel: 'Education', track: null   },
  { id: 'certs',      num: '08', label: 'Certifications',    navLabel: null,        track: null   },
  { id: 'contact',    num: '09', label: 'Contact',           navLabel: 'Contact',   track: null   },
];

export const NAV_SECTIONS = SECTIONS.filter(s => s.navLabel);

/** Maps any section id to the nav entry that should light up for it. */
export const NAV_PARENT = SECTIONS.reduce((acc, s, i, all) => {
  let owner = s;
  for (let j = i; j >= 0; j--) { if (all[j].navLabel) { owner = all[j]; break; } }
  acc[s.id] = owner.id;
  return acc;
}, {});
