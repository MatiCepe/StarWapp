'use client';

import { People } from '../models/People'; // Asegurate de tener este tipo
import { PeopleService } from '../services/PeopleService';
import GenericList from './base/GenericList';
import PeopleComponent from './PeopleComponent';

export default function CharacterList() {
  const fetchPeople = () => new PeopleService().getAll();

  return (
    <GenericList<People>
      fetchItems={fetchPeople}
      renderItem={(char) => <PeopleComponent character={char} />}
      getFilterField={(char) => char.name}
      title="Explore Characters"
      description="Explore the iconic characters of the Star Wars universe. Discover detailed information about heroes, villains, and supporting roles, their backgrounds, and their impact on the galaxy."
    />
  );
}
