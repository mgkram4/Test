'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/subscriptions", label: "Subscriptions" },
  { href: "/services", label: "Services" },
  { href: "/ai-invoice-demo", label: "AI Invoice Demo" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <nav className="w-full  bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800 shadow-lg sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 focus:outline-blue-500" tabIndex={0} aria-label="Go to home">
          <span className="font-bold text-blue-700 dark:text-blue-300 text-2xl bg-white/60 dark:bg-gray-900/60 rounded-full p-2 shadow-md">🚗</span>
          <span className="font-extrabold text-gray-900 dark:text-white text-xl tracking-tight drop-shadow">Precision Auto Solutions</span>
        </Link>
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-150 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 ${pathname === link.href ? "bg-blue-600 text-white dark:bg-blue-700 dark:text-white shadow" : "text-gray-700 dark:text-gray-200"}`}
              tabIndex={0}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#plans">
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-150 focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars className="text-2xl text-blue-700 dark:text-blue-300" />
          </button>
        </div>
      </div>
      {drawerOpen && (
        <aside
          className="fixed inset-0 z-[100] flex"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-black/40 flex-1"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="w-72 max-w-full bg-white dark:bg-gray-900 h-full shadow-lg flex flex-col p-6 gap-6">
            <button
              className="self-end mb-4 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <FaTimes className="text-2xl text-blue-700 dark:text-blue-300" />
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-3 rounded-lg font-semibold text-base transition-all duration-150 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 ${pathname === link.href ? "bg-blue-600 text-white dark:bg-blue-700 dark:text-white shadow" : "text-gray-700 dark:text-gray-200"}`}
                  onClick={() => setDrawerOpen(false)}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#plans" onClick={() => setDrawerOpen(false)}>
                <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-150 focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400">
                  Get Started
                </button>
              </Link>
            </nav>
          </div>
        </aside>
      )}
    </nav>
  );
} 