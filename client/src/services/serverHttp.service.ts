import axios, {
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const baseURL = 'https://localhost:443/';
const refreshUrl = 'token/refresh';
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
        config.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
    const fullUrl = `${baseURL}${config.url}`;
    console.log(`Sending request to ${fullUrl}`);
    return config;
  },
);

serverClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError) => {
    const config = error.config as InternalAxiosRequestConfig & {
      retryCount?: number;
    };
    config.retryCount = (config.retryCount || 0) + 1;

    if (config.retryCount >= MAX_RETRIES) {
      return Promise.reject(error);
    }

    if (
      error.response!.status === 401 &&
      error.message === 'Token has expired.'
    ) {
      config.url = `${baseURL}${refreshUrl}`;
      return serverClient(config);
    }

    return;
  },
);
