/**
 * @description 유저 정보 요청 테스트
 */
export interface UserRequestType {
  id: string;
}

/**
 * @description 유저 정보 응답 테스트
 */
export type UserResponseType = {
  id: number;
  email: string;
  name: string;
  hp: string;
  birthDate: Date;
} | null;

/**
 * @description 회원가입 요청 타입
 */
export interface UserSignUpRequest {
  email: string; // 이메일
  passwd: string; // 패스워드
  name: string; // 이름
  nickname: string; // 닉네임
  hp: string; // 휴대폰번호
  birthDate: string; // 생년월일
}

/**
 * @description 회원가입 응답 타입
 */
export type UserSignUpResponse = 0 | 1; // 0: 실패, 1: 성공

/**
 * @description 로그인 요청 타입
 */
export interface UserSignInRequest {
  email: string;
  passwd: string;
}

/**
 * @description 로그인 응답 타입
 */
export interface UserSignInResponse {
  id: number;
  email: string;
  accessToken: string;
  refreshToken: string;
}
