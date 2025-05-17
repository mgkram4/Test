import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4 mt-8 sticky bottom-0 z-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-bold text-lg">
          <span className="bg-white/60 dark:bg-gray-900/60 rounded-full p-1 shadow">🚗</span>
          <span>Precision Auto Solutions</span>
        </div>
        <div className="flex gap-4 text-sm items-center">
          <Link href="/" className="hover:underline text-gray-700 dark:text-gray-200">Home</Link>
          <Link href="/subscriptions" className="hover:underline text-gray-700 dark:text-gray-200">Subscriptions</Link>
          <Link href="/services" className="hover:underline text-gray-700 dark:text-gray-200">Services</Link>
          <Link href="/about" className="hover:underline text-gray-700 dark:text-gray-200">About</Link>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ml-2 text-gray-500 hover:text-blue-700 dark:hover:text-blue-300"><FaGithub size={18} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-300"><FaLinkedin size={18} /></a>
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">&copy; {new Date().getFullYear()} Precision Auto Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
} 