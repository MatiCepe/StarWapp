import { People } from "../models/People";

interface PeopleComponentProps {
    character: People;
  }
  
  
  const PeopleComponent: React.FC<PeopleComponentProps> = ({ character }) => {
    return (
      <div className="max-w-sm mx-auto text-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: '#333' }}>
        <h2 className="text-2xl font-bold mb-4 text-center">{character.name}</h2>
        <ul className="space-y-2">
          <li><span className="font-semibold">Height:</span> {character.height} cm</li>
          <li><span className="font-semibold">Mass:</span> {character.mass} kg</li>
          <li><span className="font-semibold">Hair Color:</span> {character.hair_color}</li>
          <li><span className="font-semibold">Skin Color:</span> {character.skin_color}</li>
          <li><span className="font-semibold">Eye Color:</span> {character.eye_color}</li>
          <li><span className="font-semibold">Birth Year:</span> {character.birth_year}</li>
          <li><span className="font-semibold">Gender:</span> {character.gender}</li>
          <li><span className="font-semibold">Homeworld:</span> {character.homeworld}</li>
          <li><span className="font-semibold">Films:</span> {character.films.length}</li>
          <li><span className="font-semibold">Species:</span> {character.species.length}</li>
          <li><span className="font-semibold">Vehicles:</span> {character.vehicles.length}</li>
          <li><span className="font-semibold">Starships:</span> {character.starships.length}</li>
        </ul>
      </div>
    );
  };
  
  export default PeopleComponent;