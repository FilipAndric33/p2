import { Show } from '../models/shows';
import { Movie } from '../models/movies';

interface Props {
  content: Show | Movie;
}

export const useIsShow = ({ content }: Props) => {
  const isShow = (item: Show | Movie): boolean => {
    if (item) {
      return 'first_air_date' in item;
    }
    return false;
  };

  return isShow(content);
};
