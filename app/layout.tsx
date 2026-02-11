
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nextjs-blog-9vy6sehrf-wilmer-juntados-projects.vercel.app"
  ),
  title: "Wilmer’s Blog",
  description: "A Next.js blog about storytelling, marketing, and growth.",
};


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
