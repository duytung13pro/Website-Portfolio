import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jay Dao | dev. | Full-Stack Software Developer",
  description:
    "Jay Dao's portfolio showcasing full-stack web systems, AI integrations, containerized deployments, and automated data pipelines.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Jay Dao | dev. | Full-Stack Software Developer",
    description:
      "Jay Dao's portfolio showcasing full-stack web systems, AI integrations, containerized deployments, and automated data pipelines.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth antialiased">
      <body className={`${inter.variable} bg-white font-sans text-neutral-900 dark:bg-black dark:text-neutral-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
