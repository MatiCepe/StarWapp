interface FullFilmDto {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: PeopleDto[];
    planets: PlanetDTO[];
    starships: StarshipDTO[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}
