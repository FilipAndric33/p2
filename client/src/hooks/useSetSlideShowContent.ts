import { Movie } from '../models/movies';
import { Show } from '../models/shows';
import { useEffect, useState } from 'react';

interface Props {
  content: Movie[] | Show[];
}

export const useSetSlideShowContent = ({ content }: Props) => {
  const [slideShowContent, setSlideShowContent] = useState<Movie[] | Show[]>(
    [],
  );

  useEffect(() => {
    if (content && content.length >= 3) {
      setSlideShowContent(content.slice(0, 3));
    }
  }, [content]);

  return slideShowContent;
};
