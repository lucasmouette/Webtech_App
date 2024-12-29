// Code written by Lucas Mouette

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Globals/Navbar"
import Footer from "@/components/Globals/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Travel Buddy",
  description: "Your Travel Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{display: "grid", gridTemplateRows: "auto 1fr auto", minHeight: "100vh"}}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}