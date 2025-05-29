import { Planet } from "../models/Planet";
import { Colors } from "../other/Colors";

interface PlanetComponentProps {
  planet: Planet;
}

const PlanetComponent: React.FC<PlanetComponentProps> = ({ planet }) => {
  return (
    <div className="max-w-sm mx-auto text-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: Colors.beige }}>
      <h2 className="text-2xl font-bold mb-4 text-center">{planet.name}</h2>
      <ul className="space-y-2">
        <li><span className="font-semibold">Rotation Period:</span> {planet.rotation_period} hours</li>
        <li><span className="font-semibold">Orbital Period:</span> {planet.orbital_period} days</li>
        <li><span className="font-semibold">Diameter:</span> {planet.diameter} km</li>
        <li><span className="font-semibold">Climate:</span> {planet.climate}</li>
        <li><span className="font-semibold">Gravity:</span> {planet.gravity}</li>
        <li><span className="font-semibold">Terrain:</span> {planet.terrain}</li>
        <li><span className="font-semibold">Surface Water:</span> {planet.surface_water}%</li>
        <li><span className="font-semibold">Population:</span> {planet.population}</li>
        <li><span className="font-semibold">Residents:</span> {planet.residents.length}</li>
        <li><span className="font-semibold">Films:</span> {planet.films.length}</li>
      </ul>
    </div>
  );
};

export default PlanetComponent;