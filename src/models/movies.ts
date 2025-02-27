export interface movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: collection | null;
  budget: number;
  genre_ids: number[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompany[];
  production_countries: productionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface productionCountry {
  iso_3166_1: string;
  name: string;
}

export interface spokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
