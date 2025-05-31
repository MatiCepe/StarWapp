'use client';

import { useEffect, useState } from 'react';
import { Planet } from '../models/Planet';
import { PlanetService } from '../services/PlanetService';
import PlanetComponent from './PlanetComponent';
import { GenericCard } from './base/GenericCard';
import { FilmsService } from '../services/FilmsService';
import { SearchBar } from './base/SearchBar';

export default function PlanetsList() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const service = new PlanetService();
    service.getAll().then((response) => {
      setPlanets(response)
      setFilteredPlanets(response)
    }
    ).catch((error) => {
      console.error('Error fetching planets:', error);
    });
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredPlanets(
        planets.filter((planet) =>
          planet.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredPlanets(planets);
    }
  }, [query, planets]);
  
  return (

    <div className="min-h-screen bg-sand dark:bg-gray-950 text-gray-900 dark:text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-6xl mx-auto">
        <h1 className="font-bold text-lg sm:text-2xl font-[family-name:var(--font-geist-mono)]">
          Explore Planets
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore the diverse planets of the Star Wars galaxy.
          Learn about unique environments, native species, and the important events that shaped these worlds.
        </p>
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {filteredPlanets.map((char) => (
            <GenericCard
              key={char.name}
              renderDetails={(char) => <PlanetComponent planet={char} />}
              item={char}
            />
          ))}
        </div>
      </main>
    </div>



  );
}
