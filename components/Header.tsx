"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#2980B9] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </Link>
      <nav className="space-x-6 hidden md:flex">
        <Link href="/">Головна</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/services">Види послуг</Link>
        <Link href="/portfolio">Портфоліо</Link>
        <Link href="/contact">Контакти</Link>
      </nav>
      <button className="border border-white px-2 py-1 rounded">UA</button>
    </header>
  );
}
