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
    name: "Freezer",
    slug: "freezer",
    image: {
      url: "/freezerr.png",
      width: 400,
      height: 200,
      alt: "Freezer - Modern S3 File Explorer"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/freezer",
      liveUrl: "https://freezer-xi.vercel.app",
    },
    description: "A sleek, modern S3 file explorer that transforms how you manage your cloud storage. Built with Next.js 14 and featuring JWT authentication, it offers enterprise-grade security with a beautiful, intuitive interface.",
    tags: [
      "TypeScript",
      "Next.js",
      "AWS S3",
      "TailwindCSS",
      "JWT Authentication"
    ]
  },
  {
    name: "Notification Simulator",
    slug: "notification-simulator",
    image: {
      url: "/notification.png",
      width: 400,
      height: 200,
      alt: "Notification Simulator - A tool for sending multiple SMS messages efficiently"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/notification-simulator",
      liveUrl: "https://smsbomber.live",
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
      url: "/dummy.webp",
      width: 400,
      height: 200,
      alt: "Chat App - Secure anonymous chat platform"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/chat-app",
      liveUrl: "#",
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
      url: "/chotu.webp",
      width: 400,
      height: 200,
      alt: "Audio Scribe - AI-powered speech-to-text tool"
    },
    urls: {
      githubUrl: "https://github.com/surendrakumar6350/audio-scribe",
      liveUrl: "https://audio-scribe-ashy.vercel.app",
    },
    description: "Audio Scribe is an AI-powered tool for converting speech to text and translating transcriptions into multiple languages. Experience seamless voice-to-text conversion with high accuracy.",
    tags: [
      "JavaScript",
      "Speech Recognition",
      "AI",
      "Translation",
      "Web App"
    ]
  }
];
