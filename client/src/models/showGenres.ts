export interface ShowGenres {
  id: number;
  name: ShowGenreNames;
}

export type ShowGenreNames =
  | 'Action & Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Kids'
  | 'Mystery'
  | 'News'
  | 'Reality'
  | 'Sci-Fi & Fantasy'
  | 'Soap'
  | 'Talk'
  | 'War & Politics'
  | 'Western';
