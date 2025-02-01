import { serverClient } from './serverHttp.service';
import { loginInterface } from '../models/loginInterface';

interface props {
  email: string;
  password: string;
}

export const loginUserService = async ({ email, password }: props) => {
  try {
    const response = await serverClient.post<loginInterface>('/login', {
      email,
      password,
    });
    if (!response) {
      return;
    }
    const loginRes = response.data;
    return {
      id: loginRes.id,
      username: loginRes.username,
      email: loginRes.email,
    };
  } catch (err) {
    console.log(err);
    return;
  }
};
