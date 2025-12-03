import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 👉 Додаємо наш компонент
import NetlifyInit from "./netlify-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4Profi",
  description: "Брендування, гравірування, друк",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* 🟢 Викликаємо ініціалізацію Netlify Identity */}
        <NetlifyInit />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
