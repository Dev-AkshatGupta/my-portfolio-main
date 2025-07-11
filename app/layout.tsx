import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat Gupta - FrontEnd Software Engineer II",
  description:
    "Software Engineer specializing in FrontEnd Development with expertise in React and other Frontend technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
