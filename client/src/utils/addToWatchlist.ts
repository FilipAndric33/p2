import { serverClient } from '../services/serverHttp.service';

export const addToWatchlist = async (id: number) => {
  try {
    const response = await serverClient.post(`content/watchlist/${id}`);
    if (!response) {
      alert('Connection error.');
    }
    console.log(response);
    return;
  } catch (err) {
    console.error(err);
  }
};
