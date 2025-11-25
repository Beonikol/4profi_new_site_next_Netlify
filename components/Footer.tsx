// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2980B9] text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mb-4 md:mb-0" />
        <nav className="space-x-6 mb-4 md:mb-0">
          <Link href="/">Головна</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/services">Види послуг</Link>
          <Link href="/portfolio">Портфоліо робіт</Link>
          <Link href="/contact">Контакти</Link>
        </nav>
        <div className="flex space-x-4">
          <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={18} />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={18} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-4 border-t border-white/20 pt-2">
        © 2025 4Profi. Всі права захищено.
      </div>
    </footer>
  );
}
