import executeQuery from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { ResponseType } from '@/types/api';
import { UserSignInResponse } from '@/types/models/user';
import jwt from 'jsonwebtoken';
import { JWT_REFRESH_SECRET, JWT_SECRET } from '@/constants/jwt';
import { verifyPassword } from '@/utils/crypto-util';

/**
 * @description 로그인 API
 */
export async function POST(request: NextRequest) {
  const { email, passwd } = await request.json();

  const response: ResponseType<UserSignInResponse | null> = {
    data: null,
    statusCd: '400',
    message: '',
  };

  try {
    const data = await executeQuery<string[], { id: number; passwd: string; salt: string }[]>(
      `SELECT id, passwd, salt FROM user WHERE email=?`,
      [email],
    );

    if (data && data?.length === 1) {
      const { passwd: storedPasswd, id, salt } = data[0];
      const isPasswordValid = verifyPassword(passwd, storedPasswd, salt);
      if (isPasswordValid) {
        // 비번이 일치하는 경우

        // JWT 토큰 생성
        const accessToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: '2h' });
        const refreshToken = jwt.sign({ id }, JWT_REFRESH_SECRET, { expiresIn: '2w' });

        // accessToken, refreshToken 생성 후 email, id, accessToken, refreshToken 반환
        response.data = {
          accessToken,
          refreshToken,
          email,
          id,
        };
        response.statusCd = 'S200';
        response.message = 'SUCCESS';
        return NextResponse.json(response);
      }

      // 비번이 일치하지 않는 경우
      response.message = 'Wrong password';
      response.statusCd = 'E601';
      return NextResponse.json(response);
    }

    // 유저가 없는 경우(회원이 아닌 상태)
    response.message = 'Not found user';
    response.statusCd = 'E404';
    return NextResponse.json(response);
  } catch (error) {
    console.error('error ', error);
    response.statusCd = '500';
    response.message = 'Internal server error';
    return NextResponse.json(response, { status: 500, statusText: response.message });
  }
}
