import { API_HOST } from '@/constants/api';
import axios, { AxiosError } from 'axios';

/**
 * @description 권한이 필요한 네트워크 통신
 */
const authClient = axios.create({
  baseURL: `${API_HOST}/api`,
});

authClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default authClient;
