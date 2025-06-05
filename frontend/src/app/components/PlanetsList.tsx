'use client';

import { Planet } from '../models/Planet';
import { PlanetService } from '../services/PlanetService';
import PlanetComponent from './PlanetComponent';
import GenericList from './base/GenericList';

export default function PlanetsList() {  
  const fetchPlanets = () => new PlanetService().getAll();

  return (
    <GenericList<Planet>
      fetchItems={fetchPlanets}
      renderItem={(pl) => <PlanetComponent planet={pl} />}
      getFilterField={(pl) => pl.name}
      title="Explore Planets"
      description="Explore the diverse planets of the Star Wars galaxy.
          Learn about unique environments, native species, and the important events that shaped these worlds."
    />
  );
}
