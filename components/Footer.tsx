import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2980B9] text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">

        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} />

        {/* Навігація */}
        <nav className="flex flex-col items-center mt-4 space-y-2 text-center md:flex-row md:space-y-0 md:space-x-8">
          <Link href="/">Головна</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/services">Види послуг</Link>
          <Link href="/portfolio">Портфоліо робіт</Link>
          <Link href="/contact">Контакти</Link>
        </nav>

        {/* Соцмережі */}
        <div className="flex space-x-6 text-xl mt-5">
          <a href="#" target="_blank"><FaTelegramPlane /></a>
          <a href="#" target="_blank"><FaFacebookF /></a>
          <a href="#" target="_blank"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 opacity-80">
          © 2025 4Profi. Всі права захищено.
        </p>
      </div>
    </footer>
  );
}
