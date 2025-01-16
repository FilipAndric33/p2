export interface showGenres {
  id: number;
  name: showGenreNames;
}

export type showGenreNames =
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
