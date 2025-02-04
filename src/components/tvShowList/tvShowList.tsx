import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';
import { useGetShows } from '../../hooks/useGetShows';
import { useSetSlideShowContent } from '../../hooks/useSetSlideShowContent';

const TVShowList = () => {
  const shows = useGetShows();
  const slideShowContent = useSetSlideShowContent({ content: shows });

  return (
    <div className={'flex column'}>
      <SlideShow content={slideShowContent} />
      <h2>Popular on Honey Movies</h2>
      <div className={'popular-cards-content flex space-between'}>
        {shows &&
          shows.length > 0 &&
          shows
            .slice(4, 7)
            .map((show, index) => <PopularCard content={show} key={index} />)}
      </div>
    </div>
  );
};

export default TVShowList;
