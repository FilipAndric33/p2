import { serverClient } from './serverHttp.service';

interface props {
  email: string;
  password: string;
}

export const loginUserService = async ({ email, password }: props) => {
  try {
    const response = await serverClient.post('login', {
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
