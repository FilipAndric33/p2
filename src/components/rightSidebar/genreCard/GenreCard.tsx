import React from 'react';
import { useGetShows } from '../../../hooks/useGetShows';
import { useGetMovies } from '../../../hooks/useGetMovies';
import { sharedGenreNames } from '../../../models/sharedGenres';

interface Props {
  genreName: sharedGenreNames;
}

const GenreCard: React.FC<Props> = ({ genreName }) => {
  const movies = useGetMovies();
  const shows = useGetShows();
  const randNumb = Math.floor(Math.random() * 20);
  const coin = Math.ceil(Math.random() * 100);

  return (
    <div
      className={
        'flex genre-card relative py-12 px-16 m-4 ml-0 h-[15vh] w-6/10 justify-center items-center'
      }
    >
      {movies.length >= 20 && shows.length >= 20 ? (
        coin <= 50 ? (
          <div
            className={'background-image gradient-normal'}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300${movies[randNumb].poster_path})`,
            }}
          />
        ) : (
          <div
            className={'background-image gradient-normal'}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300${shows[randNumb].poster_path})`,
            }}
          />
        )
      ) : null}
      <h5 className={'text-xl'}>{genreName}</h5>
    </div>
  );
};

export default GenreCard;
