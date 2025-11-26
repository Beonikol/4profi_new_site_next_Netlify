"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про нас" },
    { href: "/services", label: "Види послуг" },
    { href: "/portfolio", label: "Портфоліо робіт" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <header className="w-full bg-[#2980B9] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language button */}
        <button className="hidden md:block border px-3 py-1 rounded hover:bg-white hover:text-[#2980B9] transition">
          UA
        </button>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#2980B9] text-white px-4 pb-4 animate-fade">
          <nav className="flex flex-col space-y-3 mt-2 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/20 pb-2"
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 border px-3 py-1 rounded w-16">
              UA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
