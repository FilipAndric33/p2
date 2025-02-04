import { movie } from '../models/movies';
import { show } from '../models/shows';
import { useEffect, useState } from 'react';

interface Props {
  content: movie[] | show[];
}

export const useSetSlideShowContent = ({ content }: Props) => {
  const [slideShowContent, setSlideShowContent] = useState<movie[] | show[]>(
    [],
  );

  useEffect(() => {
    if (content && content.length >= 3) {
      setSlideShowContent(content.slice(0, 3));
    }
  }, [content]);

  return slideShowContent;
};
