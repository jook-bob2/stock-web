import authClient from '@/net/axios/auth-client';
import { ResponseType } from '@/types/api';
import { UserRequestType, UserResponseType } from '@/types/models/user';
import { AxiosError } from 'axios';

/**
 * @description 유저 정보 가져오기 테스트
 */
export const getUserInfo = async (params: UserRequestType) => {
  try {
    const response = await authClient.get('/user', {
      params,
    });
    return response.data as ResponseType<UserResponseType>;
  } catch (error) {
    const err = error as AxiosError;
    return err.response?.data as ResponseType<UserResponseType>;
  }
};
