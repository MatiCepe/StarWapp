'use client';

import { useEffect, useState } from 'react';
import { FilmsService } from '../services/FilmsService';
import FilmComponent from './FilmComponent';
import { GenericCard } from './base/GenericCard';
import { SearchBar } from './base/SearchBar';

export default function FilmsList() {
  const [films, setFilms] = useState<FilmDTO[]>([]);
  const [filteredFilms, setFilteredFilms] = useState<FilmDTO[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const service = new FilmsService();
    service.getAll().then((response) => {
      setFilms(response)
      setFilteredFilms(response)
    }
    ).catch((error) => {
      console.error('Error fetching characters:', error);
    });
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredFilms(
        films.filter((film) =>
          film.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredFilms(films);
    }
  }, [query, films]);

  return (

    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-6xl mx-auto">
        <h1 className="font-bold text-lg sm:text-2xl font-[family-name:var(--font-geist-mono)]">
          Explore Films
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Dive into the epic Star Wars saga through its films.
          Explore plot summaries, release dates, and key characters involved in each episode of this legendary saga.
        </p>
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {filteredFilms.map((char) => {
            const item = { name: char.title, ...char };
            return (
              <GenericCard key={item.name} renderDetails={(char) => <FilmComponent film={char} />} item={item} />
            )
          })}
        </div>
      </main>
    </div>



  );
}
