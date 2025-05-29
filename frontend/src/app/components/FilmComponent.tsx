import { Film } from "../models/Film";
import { Colors } from "../other/Colors";

interface FilmComponentProps {
  film: Film;
}

const FilmComponent: React.FC<FilmComponentProps> = ({ film }) => {
  return (
    <div className="max-w-2xl mx-auto text-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: Colors.clay}}>
      <h2 className="text-2xl font-bold mb-4 text-center">{film.title}</h2>
      <ul className="space-y-2">
        <li><span className="font-semibold">Episode ID:</span> {film.episode_id}</li>
        <li><span className="font-semibold">Director:</span> {film.director}</li>
        <li><span className="font-semibold">Producer:</span> {film.producer}</li>
        <li><span className="font-semibold">Release Date:</span> {film.release_date}</li>
        <li><span className="font-semibold">Opening Crawl:</span> <p className="whitespace-normal">{film.opening_crawl}</p></li>
        <li><span className="font-semibold">Characters:</span> {film.characters.length}</li>
        <li><span className="font-semibold">Planets:</span> {film.planets.length}</li>
        <li><span className="font-semibold">Starships:</span> {film.starships.length}</li>
        <li><span className="font-semibold">Vehicles:</span> {film.vehicles.length}</li>
        <li><span className="font-semibold">Species:</span> {film.species.length}</li>
      </ul>
    </div>
  );
};

export default FilmComponent;