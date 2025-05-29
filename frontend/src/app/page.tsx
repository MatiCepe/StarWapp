"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PeopleService } from "./services/PeopleService";
import PeopleComponent from "./components/PeopleComponent";
import { People } from "./models/People";
import { ImageGrid } from "./components/ImageGrid";
import Header from "./components/Header";
import InternalImage from "./dtos/InternalImage";



export default function Home() {


  const images : InternalImage[] = [
    {name: "Characters", url: "/images/chars.jpeg"},
    {name: "Films", url: "/images/movies.jpeg"},
    {name: "Starships", url: "/images/starships_2.jpeg"},
    {name: "Planets", url: "/images/planets.jpeg"}
];

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

        <ImageGrid images={images} />
   
      </main>

    </div>
  );
}
