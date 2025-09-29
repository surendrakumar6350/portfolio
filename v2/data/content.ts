export type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
  features?: string[];
};

export type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  desc: string;
  achievements?: string[];
  skills?: string[];
  logo?: string;
  location?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  description: string;
  link?: string;
};

export type ExploringTech = {
  name: string;
  description: string;
  link?: string;
};

export const profile = {
  name: "Surendra Kumar",
  title: "MERN Stack Developer",
  tagline: "I build fast, accessible, and scalable web apps.",
  bio:
    "MERN-focused developer crafting modern, performant, and accessible web experiences. I enjoy building end-to-end features, clean APIs, and delightful UIs.",
  location: "City, Country",
  email: "you@example.com",
  github: "https://github.com/your",
  linkedin: "https://linkedin.com/in/your",
  resume: "/resume.pdf",
};

export const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB",
  "Mongoose", "Prisma", "GraphQL", "REST APIs", "JWT", "Zod", "Jest",
  "Playwright", "Tailwind CSS", "shadcn/ui", "Vite", "Webpack", "Docker",
  "CI/CD", "Git", "GitHub Actions",
];

export const skillGroups = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  Backend: ["Node.js", "Express", "GraphQL", "REST APIs", "JWT"],
  Database: ["MongoDB", "Mongoose", "Prisma"],
  Tools: ["Git", "GitHub Actions", "Docker", "Jest", "Playwright"],
} as const;

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Expertise in designing distributed systems on AWS",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    year: "2023",
    description: "Advanced React development and modern frontend practices",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  },
  {
    name: "MongoDB Developer",
    issuer: "MongoDB University",
    year: "2023",
    description: "Database design, queries, and optimization",
    link: "https://university.mongodb.com/certification"
  }
];

export const exploringTech: ExploringTech[] = [
  {
    name: "Rust",
    description: "Learning systems programming for WebAssembly and CLI tools"
  },
  {
    name: "tRPC",
    description: "Type-safe APIs between client and server"
  },
  {
    name: "Kubernetes",
    description: "Container orchestration for scalable deployments"
  },
  {
    name: "Svelte",
    description: "Exploring reactive UI development"
  },
  {
    name: "Web3",
    description: "Smart contracts and decentralized apps"
  }
];

export const projects: Project[] = [
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with auth, charts, and billing.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    github: "https://github.com/your/saas-dashboard",
    demo: "https://saas.example.com",
    image: "/projects/saas-dashboard.png",
    features: [
      "User authentication with NextAuth.js",
      "Real-time analytics with Chart.js",
      "Subscription management with Stripe",
      "Responsive dashboard layout",
      "Dark mode support"
    ]
  },
  {
    title: "Realtime Chat",
    description: "Socket.io chat with rooms, presence, and file uploads.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/your/realtime-chat",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack store with cart, checkout, and admin.",
    stack: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com/your/ecommerce",
    demo: "https://shop.example.com",
  },
  {
    title: "Component Library",
    description: "Reusable UI components and docs site.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your/ui-lib",
  },
  {
    title: "Markdown Blog",
    description: "Static blog with MDX, tags, and search.",
    stack: ["Next.js", "MDX"],
    github: "https://github.com/your/mdx-blog",
  },
  {
    title: "API Boilerplate",
    description: "Express API with auth, testing, and CI.",
    stack: ["Express", "TypeScript", "Jest"],
    github: "https://github.com/your/api-starter",
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details: string;
  courses?: string[];
  achievements?: string[];
  location?: string;
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Tech Innovations Inc.",
    role: "Senior Full-Stack Developer",
    period: "2023 — Present",
    location: "San Francisco, CA (Remote)",
    desc: "Leading development of enterprise MERN applications with focus on scalability and performance optimization.",
    achievements: [
      "Reduced page load time by 45% through component optimization and code splitting",
      "Implemented CI/CD pipeline reducing deployment time from 45 to 8 minutes",
      "Mentored 4 junior developers and led bi-weekly knowledge sharing sessions",
      "Architected microservices infrastructure handling 500k+ daily users"
    ],
    skills: ["React", "Node.js", "MongoDB", "Docker", "AWS", "TypeScript"],
    logo: "/logos/tech-innovations.svg"
  },
  {
    title: "WebSolutions Co.",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    location: "Boston, MA (Hybrid)",
    desc: "Developed and maintained frontend applications with focus on performance and accessibility.",
    achievements: [
      "Built a reusable component library used across 12 company projects",
      "Migrated legacy codebase to TypeScript improving bug detection by 32%",
      "Implemented comprehensive testing strategy achieving 92% code coverage",
      "Collaborated with design team to create accessible UI components"
    ],
    skills: ["React", "TypeScript", "Jest", "Tailwind CSS", "Storybook"],
    logo: "/logos/websolutions.svg"
  },
  {
    title: "StartupHub",
    role: "Junior Web Developer",
    period: "2020 — 2021",
    location: "Chicago, IL (On-site)",
    desc: "Assisted in building web applications for early-stage startups focusing on MVPs and rapid iterations.",
    achievements: [
      "Developed 5+ landing pages and e-commerce solutions for clients",
      "Implemented responsive designs with cross-browser compatibility",
      "Integrated payment processing and CMS solutions"
    ],
    skills: ["JavaScript", "HTML/CSS", "WordPress", "Shopify"],
    logo: "/logos/startuphub.svg"
  }
];

export const education: EducationItem[] = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "M.S. in Computer Science",
    period: "2021 — 2023",
    location: "Cambridge, MA",
    details: "Specialized in distributed systems and modern web architecture.",
    courses: [
      "Advanced Web Architecture",
      "Cloud Computing",
      "Machine Learning for Web Applications",
      "Distributed Systems Design"
    ],
    achievements: [
      "Graduate Research Assistant for Web Performance Lab",
      "Published paper on efficient data streaming in web applications",
      "Dean's List for Academic Excellence"
    ],
    logo: "/logos/mit.svg"
  },
  {
    school: "University of California, Berkeley",
    degree: "B.S. in Computer Science",
    period: "2017 — 2021",
    location: "Berkeley, CA",
    details: "Focus on software engineering fundamentals with emphasis on web technologies.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development & Design",
      "Database Systems",
      "Operating Systems"
    ],
    achievements: [
      "Graduated with Honors (3.8 GPA)",
      "Led student web development club",
      "Completed capstone project: E-learning platform with 1000+ users"
    ],
    logo: "/logos/berkeley.svg"
  }
];

export const featuredSkills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "MongoDB", level: 80 },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "25+" },
  { label: "GitHub Stars", value: "1k+" },
  { label: "Clients", value: "10+" },
];

export const testimonials = [
  {
    name: "Jane Doe",
    title: "PM, Acme Inc.",
    quote: "Delivered features on time with exceptional quality and attention to detail.",
  },
  {
    name: "John Smith",
    title: "CTO, Startup Co.",
    quote: "A pleasure to work with—communicative, proactive, and highly skilled.",
  },
];
