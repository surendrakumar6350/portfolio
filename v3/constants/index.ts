interface Project {
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
  urls: {
    githubUrl?: string;
    liveUrl?: string;
    [key: string]: string | undefined;
  };
  description: string;
  tags: string[];
}

export const Projects: Project[] = [
  {
    name: "Notification Simulator",
    slug: "notification-simulator",
    image: {
      url: "/refelia.webp",
      width: 400,
      height: 200,
      alt: "Notification Simulator - A tool for sending multiple SMS messages efficiently"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/notification-simulator",
      liveUrl: "https://notification-simulator.vercel.app/",
    },
    description: "A user-friendly website designed to facilitate the sending of multiple SMS messages efficiently. Built with TypeScript and modern web technologies, it provides an intuitive interface for managing notifications.",
    tags: [
      "TypeScript",
      "React",
      "SMS API",
      "Web Development",
      "Notification System"
    ]
  },
  {
    name: "Chat App",
    slug: "chat-app",
    image: {
      url: "/detox.webp",
      width: 400,
      height: 200,
      alt: "Chat App - Secure anonymous chat platform"
    },
    urls: {
      githubUrl:"https://github.com/surendrakumar6350/chat-app",
      liveUrl: "https://chat-app-sigma-taupe.vercel.app/",
    },
    description: "A secure anonymous chat platform built with React (frontend) and WebSocket (Node.js) for the backend. It features real-time messaging, secure communications, and an intuitive interface.",
    tags: [
      "TypeScript",
      "React",
      "WebSocket",
      "Node.js",
      "Real-time Communication"
    ]
  },
  {
    name: "Audio Scribe",
    slug: "audio-scribe",
    image: {
      url: "/dummy.webp",
      width: 400,
      height: 200,
      alt: "Audio Scribe - AI-powered speech-to-text tool"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/audio-scribe",
      liveUrl: "https://audio-scribe.vercel.app/",
    },
    description: "Audio Scribe is an AI-powered tool for converting speech to text and translating transcriptions into multiple languages. Experience seamless voice-to-text conversion with high accuracy.",
    tags: [
      "JavaScript",
      "Speech Recognition",
      "AI",
      "Translation",
      "Web App"
    ]
  },
  {
    name: "YT2Download",
    slug: "yt2download",
    image: {
      url: "/chotu.webp",
      width: 400,
      height: 200,
      alt: "YT2Download - YouTube video downloader"
    },
    urls: {
      liveUrl: "https://yt2download.vercel.app",
      githubUrl: "https://github.com/surendrakumar6350/yt2download"
    },
    description: "A simple tool for downloading YouTube videos quickly and easily, built with JavaScript and modern web technologies. It provides a clean interface for accessing YouTube content offline.",
    tags: [
      "JavaScript",
      "YouTube API",
      "Download Tool",
      "Web Development"
    ]
  },
  {
    name: "E-Commerce Platform",
    slug: "e-commerce",
    image: {
      url: "/lms.webp",
      width: 400,
      height: 200,
      alt: "E-Commerce Platform - Full-featured online store"
    },
    urls: {
      liveUrl: "https://e-commerce-umber-one-80.vercel.app/",
    },
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with modern web technologies for a seamless shopping experience.",
    tags: [
       "React",
       "Node.js",
       "E-Commerce",
       "Payment Integration",
       "User Authentication"
    ]
  },
  {
    name: "Portfolio Website",
    slug: "portfolio",
    image: {
      url: "/port.webp",
      width: 400,
      height: 200,
      alt: "Portfolio Website - Showcasing my work and skills"
    },
    urls: {
      liveUrl: "https://surendrakumar6350.github.io/portfolio/",
      githubUrl: "https://github.com/surendrakumar6350/portfolio"
    },
   description: "My original portfolio website showcasing my projects, skills, and professional journey. Built with HTML, CSS, and JavaScript to present my work and capabilities to potential clients and employers.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Portfolio",
      "Web Design"
    ]
  }
];
