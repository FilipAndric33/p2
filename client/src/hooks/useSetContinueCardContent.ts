import { Show } from '../models/shows';
import { Movie } from '../models/movies';
import { useEffect, useState } from 'react';

interface Props {
  content: Show[] | Movie[];
}

export const useSetContinueCardContent = ({ content }: Props) => {
  const [continueCardContent, setContinueCardContent] = useState<
    Show[] | Movie[]
  >([]);

  useEffect(() => {
    if (content && content.length >= 7) {
      setContinueCardContent(content.slice(12, 18));
    }
  }, [content]);

  return continueCardContent;
};
