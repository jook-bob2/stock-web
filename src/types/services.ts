import { InitServerDataType } from '@/utils/server-util';

/**
 * @description 메인 서비스 타입(요청)
 */
export interface MainServiceReqType {
  initData: InitServerDataType;
}

/**
 * @description 메인 서비스 타입(반환)
 */
export interface MainServiceResType {
  initData: InitServerDataType;
}
