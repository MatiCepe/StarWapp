'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Info, ChevronLeft, CircleUser, Eclipse, Plane, Clapperboard, HomeIcon, Moon, Sun } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useSound } from '../hooks/useSounds';

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const switchOnOff = '/assets/switch.wav';

  const turnOnOff = useSound(switchOnOff);

  const showBack = path !== "/";
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full px-4 py-3 flex items-center justify-end bg-sand dark:bg-gray-950 text-gray-900 dark:text-white shadow-sm">
      <div className="flex gap-4 items-center justify-between w-full max-w-6xl mx-auto">
        <div>
          {showBack && (
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition  hover:scale-110 hover:cursor-pointer"
              aria-label="Go back"
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>


        <nav className="flex gap-6 items-end text-sm font-medium">
          <Link
            href="/"
            className={`hover:underline ${path === '/characters' ? 'font-bold underline' : ''} hover:scale-110`}
          >
            <HomeIcon />
          </Link>
          <button onClick={()=> {
              toggleTheme();
              turnOnOff();
            }} 
            className='hover:scale-110 hover:cursor-pointer'>{theme === 'light' ? <Moon /> : <Sun />}</button>
          <Link
            href="/pages/characters"
            className={`hover:underline ${path === '/characters' ? 'font-bold underline' : ''} hover:scale-110`}
          >
            <CircleUser />
          </Link>
          <Link
            href="/pages/films"
            className={`hover:underline ${path === '/films' ? 'font-bold underline' : ''} hover:scale-110`}
          >
            <Clapperboard />
          </Link>
          <Link
            href="/pages/starships"
            className={`hover:underline ${path === '/starships' ? 'font-bold underline' : ''} hover:scale-110`}
          >
            <Plane />
          </Link>
          <Link
            href="/pages/planets"
            className={`hover:underline ${path === '/planets' ? 'font-bold underline' : ''} hover:scale-110`}
          >
            <Eclipse />
          </Link>


          {/* About Link */}
          <Link
            href="/about"
            className="rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex  hover:scale-110"
            aria-label="About"
          >
            <Info />
          </Link>
        </nav>
      </div>
    </header>
  );
}
