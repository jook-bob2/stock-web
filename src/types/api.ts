/**
 * @description 예외 코드
 */
type ExceptionType =
  | 'S200' // 성공
  | 'E401' // UnAuthorization
  | 'E404' // 데이터 없음
  | 'E601'; // 비번 틀림

/**
 * @description 응답 상태 코드
 */
type StatusCdType = '200' | '400' | '404' | '500' | '502';

/**
 * @description 기본 리턴 타입
 */
export interface ResponseType<T> {
  statusCd: StatusCdType | ExceptionType;
  data: T;
  message: string;
}
