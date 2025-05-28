'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Sun, Moon, Info, Globe, ChevronLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {

  const path = usePathname();
  const router = useRouter(); 

  const showBack = path !== "/";
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
<header className="w-full px-4 py-3 flex items-center justify-end bg-white dark:bg-gray-950 text-gray-900 dark:text-white shadow-sm">
    <div className="flex gap-4 items-center justify-between w-full max-w-6xl mx-auto">
        <div>{showBack && (
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>
          ) }</div>
        {/* Theme Toggle */}
        <div><button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Change language"
        >
          <Globe size={20} />
          <span className="ml-1 text-sm">{language.toUpperCase()}</span>
        </button>

        {/* About Link */}
        <Link
          href="/about"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
          aria-label="About"
        >
          <Info size={20} />
        </Link>
        </div>
      </div>
    </header>
  );
}