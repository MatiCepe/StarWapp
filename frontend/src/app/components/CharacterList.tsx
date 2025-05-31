'use client';

import { useEffect, useState } from 'react';
import { People } from '../models/People'; // Asegurate de tener este tipo
import { PeopleService } from '../services/PeopleService';
import { GenericCard } from './base/GenericCard';
import PeopleComponent from './PeopleComponent';
import { SearchBar } from './base/SearchBar';

export default function CharacterList() {
  const [characters, setCharacters] = useState<People[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<People[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const service = new PeopleService();
    service.getAll().then((response) => {
      setCharacters(response)
      setFilteredCharacters(response)
    }
    ).catch((error) => {
      console.error('Error fetching characters:', error);
    });
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredCharacters(
        characters.filter((character) =>
          character.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredCharacters(characters);
    }
  }, [query, characters]);


  return (
    <div className="min-h-screen bg-sand dark:bg-gray-950 text-gray-900 dark:text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-6xl mx-auto">
        <h1 className="font-bold text-lg sm:text-2xl font-[family-name:var(--font-geist-mono)]">
          Explore Characters
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore the iconic characters of the Star Wars universe.
          Discover detailed information about heroes, villains, and supporting roles, their backgrounds, and their impact on the galaxy.
        </p>
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {filteredCharacters.map((char) => (
            <GenericCard
              key={char.name}
              renderDetails={(char) => <PeopleComponent character={char} />}
              item={char}
            />
          ))}
        </div>
      </main>
    </div>

  );
}
