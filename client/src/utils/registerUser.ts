import { serverClient } from '../services/serverHttp.service';

interface props {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async ({ username, email, password }: props) => {
  try {
    console.log('her2e');
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
