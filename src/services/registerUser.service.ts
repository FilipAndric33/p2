import { serverClient } from './serverHttp.service';

interface props {
  username: string;
  email: string;
  password: string;
}

export const registerUserService = async ({
  username,
  email,
  password,
}: props) => {
  try {
    const response = await serverClient.post('register', {
      username,
      email,
      password,
    });
    console.log(response.data);
    if (!response) {
      return;
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};
