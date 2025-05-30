import { useEffect, useState } from "react";
import { Film } from "../models/Film";
import { Colors } from "../other/Colors";
import { FilmsService } from "../services/FilmsService";

interface FilmComponentProps {
  film: Film;
}

const FilmComponent: React.FC<FilmComponentProps> = ({ film }) => {

  const [fullFilm, setFullFilm] = useState<FullFilmDto | null>(null);

  useEffect(() => {
    const service = new FilmsService();
    service.getFullFilm(film.episode_id).then(setFullFilm).catch(console.error);
  }, [film]);

  return (
    !fullFilm ? (<></>) : (
    <div className="max-w-2xl mx-auto text-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: Colors.clay}}>
      <h2 className="text-2xl font-bold mb-4 text-center">{film.title}</h2>
      <ul className="space-y-2">
        <li><span className="font-semibold">Episode ID:</span> {film.episode_id}</li>
        <li><span className="font-semibold">Director:</span> {film.director}</li>
        <li><span className="font-semibold">Producer:</span> {film.producer}</li>
        <li><span className="font-semibold">Release Date:</span> {film.release_date}</li>
        <li><span className="font-semibold">Opening Crawl:</span> <p className="whitespace-normal">{film.opening_crawl}</p></li>
        <li><span className="font-semibold">Characters:</span> {fullFilm.characters.map((entity) => entity.name).join(" | ")}</li>
        <li><span className="font-semibold">Planets:</span> {fullFilm.planets.map((entity) => entity.name).join(" | ")}</li>
        <li><span className="font-semibold">Starships:</span> {fullFilm.starships.map((entity) => entity.name).join(" | ")}</li>
        <li><span className="font-semibold">Vehicles:</span> {film.vehicles.length}</li>
        <li><span className="font-semibold">Species:</span> {film.species.length}</li>
      </ul>
    </div>
    )
  );
};

export default FilmComponent;