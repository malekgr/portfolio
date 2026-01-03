import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malek Garrach | Portfolio",
  description: "Software Engineer portfolio - showcasing skills, experience, and projects",
  keywords: ["software engineer", "developer", "portfolio", "web development", "Malek Garrach"],
  authors: [{ name: "Malek Garrach" }],
  openGraph: {
    title: "Malek Garrach | Portfolio",
    description: "Software Engineer portfolio - showcasing skills, experience, and projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
