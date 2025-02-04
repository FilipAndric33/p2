import React, { useEffect } from 'react';

export const useToastMessageTimer = ({
  toastMessage,
  setToastMessage,
}: {
  toastMessage: string;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  return toastMessage;
};
