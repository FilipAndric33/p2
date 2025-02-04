import { show } from '../models/shows';
import { movie } from '../models/movies';
import { useEffect, useState } from 'react';

interface Props {
  content: show[] | movie[];
}

export const useSetCardContent = ({ content }: Props) => {
  const [cardContent, setCardContent] = useState<show[] | movie[]>([]);

  useEffect(() => {
    if (content && content.length >= 7) {
      setCardContent(content.slice(12, 18));
    }
  }, [content]);

  return cardContent;
};
