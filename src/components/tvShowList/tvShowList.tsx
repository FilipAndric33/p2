import SlideShow from '../slideShow/SlideShow';
import PopularCard from '../popularCard/PopularCard';
import { useGetShows } from '../../hooks/useGetShows';
import { useSetSlideShowContent } from '../../hooks/useSetSlideShowContent';

const TVShowList = () => {
  const shows = useGetShows();
  const slideShowContent = useSetSlideShowContent({ content: shows });

  return (
    <div className={'flex flex-col flex-1'}>
      <SlideShow content={slideShowContent} />
      <h2 className={'text-2xl font-bold mt-8 mb-4'}>
        Popular on Honey Movies
      </h2>
      <div className={'flex flex-1 justify-between'}>
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
