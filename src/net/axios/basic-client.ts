import { API_HOST } from '@/constants/api';
import axios, { AxiosError } from 'axios';

/**
 * @description 권한이 필요 없는 일반 네트워크 통신
 */
const basicClient = axios.create({
  baseURL: `${API_HOST}/api`,
});

basicClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

basicClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default basicClient;
