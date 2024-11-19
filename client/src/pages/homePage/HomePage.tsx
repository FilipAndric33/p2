import React, { useState } from 'react';
import TVShowList from '../../components/tvShowList/tvShowList';
import MovieList from '../../components/movieList/MovieList';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const MoviePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'movies' | 'shows' | 'anime'
  >('movies');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'movies':
        return <MovieList />;
      case 'shows':
        return <TVShowList />;
      case 'anime':
        return;
      default:
        return <MovieList />;
    }
  };

  return (
    <>
      <div className={'home-page flex'}>
        <div className={'sidebar-container'}>
          <Sidebar />
        </div>
        <div className="flex column center-container">
          <Navbar setSelectedCategory={setSelectedCategory} />
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default MoviePage;
