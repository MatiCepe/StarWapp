'use client';

import { Film } from '../models/Film';
import { FilmsService } from '../services/FilmsService';
import FilmComponent from './FilmComponent';
import GenericList from './base/GenericList';

export default function FilmsList() {

  const fetchFilms = async () => {
    const films = await new FilmsService().getAll();
    return films.map(film => ({ name: film.title, ...film }));
  };

  return (
    <GenericList<Film>
      fetchItems={fetchFilms}
      renderItem={(char) => <FilmComponent film={char} />}
      getFilterField={(char) => char.title}
      title="Explore Films"
      description="Dive into the epic Star Wars saga through its films. Explore plot summaries, release dates, and key characters involved in each episode of this legendary saga."
    />
  );
}
