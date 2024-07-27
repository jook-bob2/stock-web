import { JWT_SECRET } from '@/constants/jwt';
import jwt from 'jsonwebtoken';

// JWT 디코딩 타입 정의
interface TokenPayload {
  exp: number;
  id: number;
}

// AccessToken의 유효성 체크 함수
export const verifyAccessToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    console.error('Invalid or expired token', error);
    return null;
  }
};
