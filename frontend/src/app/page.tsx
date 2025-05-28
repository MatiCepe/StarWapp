"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PeopleService } from "./services/PeopleService";
import PeopleComponent from "./components/PeopleComponent";
import { People } from "./models/People";
import { ImageGrid } from "./components/ImageGrid";
import Header from "./components/Header";
import InternalImage from "./dtos/InternalImage";


const peopleService = new PeopleService(); 

export default function Home() {

  const [mainChar, setMainChar] = useState<People| null>(null);
  const images : InternalImage[] = [
    {name: "Chars", url: "/images/chars.jpeg"},
    {name: "Movies", url: "/images/movies.jpeg"},
    {name: "Starships", url: "/images/starships_2.jpeg"},
    {name: "Planets", url: "/images/planets.jpeg"}
];
  useEffect(() => {
    peopleService.getById(1).then((response) => {
      setMainChar(response);
    });
  }, []);

  return (
    <div className="grid bg-white dark:bg-gray-950 text-gray-900 dark:text-white grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul className="list-inside text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Star Wars Explorer
          </h1>
          <p className="text-lg sm:text-2xl max-w-2xl">
            Explore Characters, Movies, Starships and Planets from the Star Wars Universe. May the force be with you.
          </p>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        <ImageGrid images={images} />
   
        {mainChar && <PeopleComponent character={mainChar} />}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
