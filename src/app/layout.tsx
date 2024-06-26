import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar";
import { ThemeProvider } from "@/app/components/theme-provider";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js14 & Sanity Blog",
  description: "A simple blog was created with Next.js14 and Sanity as an exercise."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="mx-auto max-w-5xl px-7">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
