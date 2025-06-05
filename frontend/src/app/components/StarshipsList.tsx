'use client';

import { Starship } from '../models/Starship';
import { StarshipService } from '../services/StarshipService';
import GenericList from './base/GenericList';
import StarshipComponent from './StarhipComponent';


export default function StarshipsList() {
  const fetchStarships = () => new StarshipService().getAll();

  return (
    <GenericList<Starship>
      fetchItems={fetchStarships}
      renderItem={(st) => <StarshipComponent starship={st} />}
      getFilterField={(st) => st.name}
      title="Explore Starships"
      description="Discover the starships that traverse the galaxy.
          From fighters to cruisers, learn about the technology, specifications, and history of these iconic vessels."
    />
  );

}
