import { Starship } from "../models/Starship";
import { Colors } from "../other/Colors";

interface StarshipComponentProps {
  starship: Starship;
}

const StarshipComponent: React.FC<StarshipComponentProps> = ({ starship }) => {
  return (
    <div className="max-w-sm mx-auto text-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: Colors.clay }}>
      <h2 className="text-2xl font-bold mb-4 text-center">{starship.name}</h2>
      <ul className="space-y-2">
        <li><span className="font-semibold">Model:</span> {starship.model}</li>
        <li><span className="font-semibold">Manufacturer:</span> {starship.manufacturer}</li>
        <li><span className="font-semibold">Cost:</span> {starship.cost_in_credits} credits</li>
        <li><span className="font-semibold">Length:</span> {starship.length} meters</li>
        <li><span className="font-semibold">Max Atmosphering Speed:</span> {starship.max_atmosphering_speed}</li>
        <li><span className="font-semibold">Crew:</span> {starship.crew}</li>
        <li><span className="font-semibold">Passengers:</span> {starship.passengers}</li>
        <li><span className="font-semibold">Cargo Capacity:</span> {starship.cargo_capacity}</li>
        <li><span className="font-semibold">Consumables:</span> {starship.consumables}</li>
        <li><span className="font-semibold">Hyperdrive Rating:</span> {starship.hyperdrive_rating}</li>
        <li><span className="font-semibold">MGLT:</span> {starship.MGLT}</li>
        <li><span className="font-semibold">Starship Class:</span> {starship.starship_class}</li>
        <li><span className="font-semibold">Pilots:</span> {starship.pilots.length}</li>
        <li><span className="font-semibold">Films:</span> {starship.films.length}</li>
      </ul>
    </div>
  );
};

export default StarshipComponent;