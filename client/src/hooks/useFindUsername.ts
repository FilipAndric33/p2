import { useState, useEffect } from 'react';
import { fetchUsernameService } from '../services/fetchUsername.service';

export const useFetchUsername = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username } = await fetchUsernameService();
        if (username) {
          setUsername(username);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsername();
  });

  return username;
};
