// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA  –  Edit everything here
// ─────────────────────────────────────────────────────────────
import profilePhoto from "../assets/profilePhoto.png";

export const personal = {
  name: "Laukik Upadhyay",
  title: "Full Stack Developer",
  tagline:
    "Building scalable full-stack applications with ReactJS & Spring Boot.",
  summary:
    "Full-Stack Web Developer with hands-on expertise in frontend and backend development using ReactJS, Spring Boot, Hibernate, JPA, and PostgreSQL. Demonstrated ability to design, build, and deploy end-to-end web applications with RESTful APIs, responsive UIs, and scalable architecture. Experienced in CI/CD workflows, cloud deployment (Vercel & Render), and Agile collaboration.",
  email: "laukikbhardwaj183@gmail.com",
  phone: "+91-9872742320",
  location: "Bengaluru, India",
  // ⬇ Replace with your actual photo path once you add it: "/src/assets/profile.jpg"
  photo: profilePhoto,
  // ⬇ Replace with your actual Google Drive resume link
  resumeView:
    "https://drive.google.com/file/d/1_0MZ62uq_Ta6J9feE7p95US5NT13oqi7/view?usp=sharing",
  resumeDL:
    "https://drive.google.com/uc?export=download&id=1_0MZ62uq_Ta6J9feE7p95US5NT13oqi7",
};

export const socials = [
  {
    label: "GitHub",
    icon: "github",
    url: "https://github.com/laukikupadhyay",
    handle: "laukikupadhyay",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/laukikupadhyay/",
    handle: "laukikupadhyay",
  },
  {
    label: "Naukri",
    icon: "naukri",
    url: "https://www.naukri.com/mnjuser/profile",
    handle: "Laukik Upadhyay",
  },
  {
    label: "Email",
    icon: "email",
    url: "mailto:laukikbhardwaj183@gmail.com",
    handle: "laukikbhardwaj183@gmail.com",
  },
];

export const aboutStats = [
  {
    icon: "🚀",
    num: "4",
    label: "Projects Shipped",
    sub: "End-to-end full-stack apps",
  },
  {
    icon: "🏆",
    num: "4+",
    label: "Certifications",
    sub: "Including HackerRank Gold Badge",
  },
  {
    icon: "☕",
    num: "Advanced",
    label: "Java Proficiency",
    sub: "Core, Advanced & Spring ecosystem",
  },
  {
    icon: "⚡",
    num: "2+",
    label: "Tech Stacks",
    sub: "ReactJS & Spring Boot expertise",
  },
];

// ─── TECH STACK ────────────────────────────────────────────────
export const techStack = [
  {
    category: "Languages",
    color: "blue",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Frontend",
    color: "teal",
    skills: [
      {
        name: "ReactJS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    color: "purple",
    skills: [
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Spring MVC",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Spring Security",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Hibernate / JPA",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "REST API",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Servlets",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Databases",
    color: "gold",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "NoSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "teal",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Maven",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Render",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Eclipse",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
      },
    ],
  },
  {
    category: "Currently Learning",
    color: "purple",
    skills: [
      {
        name: "Microservices",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "JWT Auth",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
    ],
  },
];

// ─── PROJECTS ──────────────────────────────────────────────────
export const projects = [
  {
    title: "Courier & Logistics Tracking System",
    subtitle: "Full-Stack REST API Backend",
    desc: "Enterprise-grade shipment tracking platform built with Spring Boot covering the full delivery lifecycle — Customers, Warehouses, Delivery Agents, Packages, Payments, and Tracking History.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA/Hibernate",
      "RBAC",
    ],
    bullets: [
      "RBAC with Spring Security securing endpoints for Admin, Customer & Delivery Agent roles",
      "Relational data model across 6+ JPA/Hibernate entities with enum-based status tracking",
      "Collections Framework for in-memory filtering before DB persistence",
      "Full shipment lifecycle audit trail with timestamped Tracking History logs",
    ],
    github: "#", // ← Add your GitHub URL
    live: null,
    featured: true,
    period: "Mar 2026 – May 2026",
  },
  {
    title: "ABCs of Make-Up",
    subtitle: "Full-Stack Web Application",
    desc: "Responsive beauty tutorial platform with a React frontend, Spring Boot RESTful backend, and PostgreSQL. Deployed end-to-end on Vercel & Render with automated CI/CD pipelines.",
    tags: [
      "ReactJS",
      "Spring Boot",
      "Spring MVC",
      "PostgreSQL",
      "Vercel",
      "Render",
      "CI/CD",
    ],
    bullets: [
      "Client-side routing & state management in React for smooth SPA experience",
      "RESTful APIs with Spring Boot + Spring MVC; PostgreSQL for structured storage",
      "Automated CI/CD on Vercel (frontend) and Render (backend)",
      "Contact form with backend persistence for user inquiries",
    ],
    github: "#",
    live: "#",
    featured: true,
    period: "May 2025 – Jun 2025",
  },
  {
    title: "GitHub Repo Viewer",
    subtitle: "GitHub API Integration",
    desc: "React app that fetches and displays any GitHub user's repositories in a searchable, paginated UI using the GitHub REST API.",
    tags: ["ReactJS", "GitHub API", "JavaScript", "Tailwind CSS"],
    bullets: [
      "GitHub REST API with server-side pagination for efficient data handling",
      "Searchable, centralized repository dashboard with modern Tailwind UI",
    ],
    github: "#",
    live: null,
    featured: false,
    period: "Oct 2024 – Nov 2024",
  },
  {
    title: "Tech-Course Portal",
    subtitle: "Web Application",
    desc: "Course discovery portal with interactive comparison cards, a registration form, and a Spring Boot + MySQL backend for course management.",
    tags: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"],
    bullets: [
      "Interactive course cards showing content, fees, and duration for easy comparison",
      "Registration system with MySQL persistence via Spring Boot backend",
    ],
    github: "#",
    live: null,
    featured: false,
    period: "Apr 2023 – May 2023",
  },
];

// ─── EXPERIENCE ────────────────────────────────────────────────
export const experience = [
  {
    role: "Web Development Intern",
    company: "Code Clause",
    type: "Remote Internship",
    period: "Oct 2024 – Nov 2024",
    color: "blue",
    points: [
      "Built a fully responsive blog website frontend using React, JavaScript, and Tailwind CSS.",
      "Developed an interactive memory game with real-time score tracking, timers, and state management.",
      "Completed a structured, hands-on internship focused on front-end web development best practices.",
    ],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────────
export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Chandigarh University, Punjab",
    period: "Jun 2024",
    cgpa: "7.8 / 10",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Chandigarh_University_seal.png/240px-Chandigarh_University_seal.png",
    certUrl:
      "https://drive.google.com/file/d/10wjkj0rA2ruDFI511JXwc-0JWamEzF-M/view?usp=sharing",
    type: "B.Tech",
    color: "blue",
  },
  {
    degree: "Diploma in Programming",
    institution:
      "NICT — North Eastern Institute of Computer Technology, Meghalaya",
    period: "Mar 2021",
    cgpa: "8.4 / 10",
    logo: null,
    certUrl:
      "https://drive.google.com/file/d/164i9yUHR46iPQ9odx1jaFEQd5UhyAUI7/view?usp=sharing",
    type: "Diploma",
    color: "gold",
  },
];

// ─── CERTIFICATIONS ────────────────────────────────────────────
export const certifications = [
  {
    title: "Gold Badge — Java Programming",
    issuer: "HackerRank",
    emoji: "🥇",
    color: "gold",
    url: "#", // ← Add your HackerRank profile
  },
  {
    title: "Java Full Stack Development",
    issuer: "Jspiders, Bengaluru",
    emoji: "☕",
    color: "blue",
    url: "#",
  },
  {
    title: "A Grade — Diploma in Programming",
    issuer: "NICT, Meghalaya",
    emoji: "🎓",
    color: "teal",
    url: "https://drive.google.com/file/d/164i9yUHR46iPQ9odx1jaFEQd5UhyAUI7/view?usp=sharing",
  },
  {
    title: "Class Representative Appreciation",
    issuer: "Chandigarh University",
    emoji: "🏅",
    color: "purple",
    url: "https://drive.google.com/file/d/17Mzw-VPkTL6l7K_yFgCmbMsa53ha1sYF/view?usp=sharing",
  },
];
