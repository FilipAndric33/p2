import { Show } from '../models/shows';
import { Movie } from '../models/movies';
import { useEffect, useState } from 'react';

interface Props {
  content: Show[] | Movie[];
}

export const useSetCardContent = ({ content }: Props) => {
  const [cardContent, setCardContent] = useState<Show[] | Movie[]>([]);

  useEffect(() => {
    if (content && content.length >= 7) {
      setCardContent(content.slice(12, 18));
    }
  }, [content]);

  return cardContent;
};
