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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "M. Basit Ali Afzal | Frontend Developer",
  description:
    "Frontend Developer with 3+ years building responsive web apps with React.js, Next.js & TypeScript. Lahore, Pakistan.",
  openGraph: {
    title: "M. Basit Ali Afzal | Frontend Developer",
    description:
      "Frontend Developer with 3+ years building responsive web apps with React.js, Next.js & TypeScript.",
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
