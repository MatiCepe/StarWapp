'use client';

import { useEffect, useState } from 'react';
import { StarshipService } from '../services/StarshipService';
import { GenericCard } from './base/GenericCard';
import StarshipComponent from './StarhipComponent';
import { SearchBar } from './base/SearchBar';


export default function StarshipsList() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [filteredStarships, setFilteredStarships] = useState<Starship[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const service = new StarshipService();
    service.getAll().then((response) => {
      setStarships(response)
      setFilteredStarships(response)
    }
    ).catch((error) => {
      console.error('Error fetching starships:', error);
    });
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredStarships(
        starships.filter((st) =>
          st.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredStarships(starships);
    }
  }, [query, starships]);

  return (

    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-6xl mx-auto">
        <h1 className="font-bold text-lg sm:text-2xl font-[family-name:var(--font-geist-mono)]">
          Explore Starships
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Discover the starships that traverse the galaxy.
          From fighters to cruisers, learn about the technology, specifications, and history of these iconic vessels.
        </p>
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {filteredStarships.map((char) => (
            <GenericCard
              key={char.name}
              renderDetails={(char) => <StarshipComponent starship={char} />}
              item={char}
            />
          ))}
        </div>
      </main>
    </div>

  );
}
