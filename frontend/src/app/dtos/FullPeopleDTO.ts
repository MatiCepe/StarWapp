interface FullPeopleDto {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: PlanetDTO;
  films: FilmDTO[];
  species: string[];
  vehicles: string[];
  starships?: StarshipDTO[];
  created: string;
  edited: string;
  url: string;
}
