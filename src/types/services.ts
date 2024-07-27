import { InitServerDataType } from '@/utils/server-util';
import { UserResponseType } from './models/user';
import { ResponseType } from './api';

/**
 * @description 홈 서비스 타입(요청)
 */
export interface HomeServiceReqType {
  initData: InitServerDataType;
  userInitData?: ResponseType<UserResponseType>;
}

/**
 * @description 홈 서비스 타입(반환)
 */
export interface HomeServiceResType {
  initData: InitServerDataType;
  userData?: ResponseType<UserResponseType>;
  isLoading: boolean;
}
