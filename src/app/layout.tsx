import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdullahi Mukaila Olawale | Full‑Stack Developer Portfolio",
  description:
    "Explore the professional portfolio of Abdullahi Mukaila Olawale, a full‑stack web and mobile developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Abdullahi Mukaila Olawale",
    "Olawale Portfolio",
    "Full‑Stack Developer",
    "Web Developer",
    "Next.js",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Abdullahi Mukaila Olawale", url: "https://olawale-portfolio.vercel.app" }],
  creator: "Abdullahi Mukaila Olawale",
  publisher: "Olawale.dev",
  metadataBase: new URL("https://olawale-portfolio.vercel.app"),
  openGraph: {
    title: "Abdullahi Mukaila Olawale | Full‑Stack Developer Portfolio",
    description:
      "Showcasing projects, skills, and experience in web and mobile development using React, Next.js, Node.js, and more.",
    url: "https://olawale-portfolio.vercel.app",
    siteName: "Olawale Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://olawale-portfolio.vercel.app/images/ola.jpg",
        width: 1200,
        height: 630,
        alt: "Olawale Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullahi Mukaila Olawale | Full‑Stack Developer Portfolio",
    description:
      "Discover the portfolio of a passionate full‑stack developer specializing in modern web technologies.",
    creator: "@your_twitter_handle",
    images: ["https://olawale-portfolio.vercel.app/images/ola.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
