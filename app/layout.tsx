import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
const font = Hanken_Grotesk({ subsets: ["latin"] });
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://surendrakumar6350.vercel.app"),
  title: {
    default: "Surendra Kumar",
    template: "%s | Surendra Kumar",
  },
  description: "Full Stack Web Developer and Engineering Student from Rajasthan, India, specializing in React, Next.js, and Node.js.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Rajasthan", "India"],
  authors: [{ name: "Surendra Kumar", url: "https://github.com/surendrakumar6350/" }],
  creator: "Surendra Kumar",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://surendrakumar6350.vercel.app",
    siteName: "Surendra Kumar's Portfolio",
    title: "Surendra Kumar - Full Stack Web Developer",
    description: "Full Stack Web Developer and Engineering Student from Rajasthan, India, specializing in React, Next.js, and Node.js.",
    images: [
      {
        url: "https://surendrakumar6350.vercel.app/og1.png",
        width: 1200,
        height: 675,
        alt: "Surendra Kumar's Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@surendrakumar6350",
    creator: "@surendrakumar6350",
    images: [
      {
        url: "https://surendrakumar6350.vercel.app/og1.png",
        width: 1200,
        height: 675,
        alt: "Surendra Kumar's Profile Picture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#111010] flex justify-center`}>
        {children}
      </body>
    </html>
  );
}