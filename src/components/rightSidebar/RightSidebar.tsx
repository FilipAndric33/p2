import ContinueCard from './continueCard/ContinueCard';
import Showcase from './showcase/Showcase';
import { useSetCardContent } from '../../hooks/useSetCardContent';
import { useGetShows } from '../../hooks/useGetShows';
import TopRatedCard from './topRatedCard/TopRatedCard';
import ShowcaseScroll from './showcase/showcaseScroll/ShowcaseScroll';
import { sharedGenres } from '../../models/sharedGenres';
import GenreCard from './genreCard/GenreCard';
import DropdownMenu from './dropdownMenu/DropdownMenu';

const RightSideBar = () => {
  const shows = useGetShows();
  const continueCardContent = useSetCardContent({ content: shows });
  const topRatedContent = useSetCardContent({ content: shows });

  return (
    <div
      className={
        'max-w-[20vw] mt-12 pl-2 justify-between overflow-x-hidden flex flex-col flex-auto'
      }
    >
      <DropdownMenu />
      <div>
        {continueCardContent && (
          <Showcase propName={'Continue'}>
            <ShowcaseScroll>
              {continueCardContent.map((content, index) => (
                <ContinueCard content={content} key={index} />
              ))}
            </ShowcaseScroll>
          </Showcase>
        )}
      </div>
      <div className={'showcase overflow-x-hidden'}>
        <Showcase propName={'Top Rated'}>
          <ShowcaseScroll>
            {topRatedContent.map((content, index) => (
              <TopRatedCard content={content} key={index} />
            ))}
          </ShowcaseScroll>
        </Showcase>
      </div>
      <div className={'showcase overflow-x-hidden'}>
        <Showcase propName={'Genres'}>
          {sharedGenres &&
            sharedGenres.map((row, rowIndex) => (
              <ShowcaseScroll key={rowIndex}>
                {row.map((genreName, genreIndex) => (
                  <GenreCard genreName={genreName} key={genreIndex} />
                ))}
              </ShowcaseScroll>
            ))}
        </Showcase>
      </div>
    </div>
  );
};

export default RightSideBar;
