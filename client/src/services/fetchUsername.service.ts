import { serverClient } from './serverHttp.service';

export const fetchUsernameService = async () => {
  try {
    const response = await serverClient.post('/user/fetchUsername');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
