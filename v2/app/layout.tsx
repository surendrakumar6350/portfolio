import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/animations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — MERN Stack Developer",
  description: "Modern, accessible portfolio showcasing MERN stack projects, skills, and experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Your Name — MERN Stack Developer",
    description: "Modern, accessible portfolio showcasing MERN stack projects, skills, and experience.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Name - MERN Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — MERN Stack Developer",
    description: "Modern, accessible portfolio showcasing MERN stack projects, skills, and experience.",
    images: ["https://your-domain.com/og-image.png"],
    creator: "@yourtwitter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
