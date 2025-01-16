import { show } from '../models/shows';
import { movie } from '../models/movies';

interface Props {
  content: show | movie;
}

export const useIsShow = ({ content }: Props) => {
  const isShow = (item: show | movie): boolean => {
    if (item) {
      return 'first_air_date' in item;
    }
    return false;
  };

  return isShow(content);
};
