import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trending Sangyan",
  description: "Get Trending gyan at the moment!!!",
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
        <div className="w-full bg-[#FF6166] text-white text-center py-2.5 text-base sticky top-0 z-50 text-xs">
          Get Daily News for latest Technology and Deen Duniya.
        </div>
        <div className="min-h-screen flex flex-col bg-white text-black">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>      
      </body>
    </html>
  );
}
