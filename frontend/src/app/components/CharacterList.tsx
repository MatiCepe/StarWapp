'use client';

import { useEffect, useState } from 'react';
import { People } from '../models/People'; // Asegurate de tener este tipo
import { PeopleService } from '../services/PeopleService';
import { CharacterCard } from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState<People[]>([]);

  useEffect(() => {
    const service = new PeopleService();
    service.getAll().then(setCharacters); 
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-20 bg-gray-950">
      {characters.map((char) => (
        <CharacterCard key={char.name} char={char} />
      ))}
    </div>
      
    
  );
}
