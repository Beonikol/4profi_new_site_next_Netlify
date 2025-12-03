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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      {/* ті ж самі шрифти / antialiased, але БЕЗ bg-white */}
      <body className="text-black antialiased">
        <Header />

        {/* main без bg-white → фон з html буде видно */}
        <main className="min-h-screen bg-transparent">
  {children}
</main>

        <Footer />
      </body>
    </html>
  );
}
