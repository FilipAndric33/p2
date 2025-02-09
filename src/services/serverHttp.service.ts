import axios, {
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';
import { loginInterface } from '../models/loginInterface';

const baseURL = 'https://c95a-31-223-132-159.ngrok-free.app';
const refreshUrl = '/token/refresh';
const MAX_RETRIES = 3;

export const serverClient: AxiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

serverClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (
      config.url &&
      !config.url.includes('register') &&
      !config.url.includes('login')
    ) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    const fullUrl = `${baseURL}${config.url}`;
    console.log(`Sending request to ${fullUrl}`);
    return config;
  },
);

serverClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data: loginInterface = response.data;

    if (data && data.accessToken && data.refreshToken) {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    }
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as InternalAxiosRequestConfig & {
      retryCount?: number;
    };
    config.retryCount = (config.retryCount || 0) + 1;

    if (config.retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    }

    if (
      error.response!.status === 401 &&
      (error.response!.data as { error: string }).error === 'Token has expired.'
    ) {
      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        return Promise.reject(error);
      }
      try {
        const refreshResponse = await axios.post(
          `${baseURL}${refreshUrl}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        if (refreshResponse) {
          const data: loginInterface = refreshResponse.data;
          console.log('Saving tokens: ', data.accessToken);
          localStorage.setItem('accessToken', data.accessToken);
        }
        const accessToken = localStorage.getItem('accessToken');

        config.headers['Authorization'] = `bearer ${accessToken}`;
        return serverClient.request(config);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  },
);
