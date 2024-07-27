import { NextRequest, NextResponse } from 'next/server';
import { ResponseType } from '@/types/api';
import { verifyAccessToken } from '@/utils/jwt-util';

/**
 * @description API 핸들러를 감싸서 권한 검증을 수행하는 함수
 * @param handler - 권한 검증이 필요한 API 핸들러
 */
export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : '';

    // 기본 응답 객체
    const response: ResponseType<any> = {
      data: null,
      statusCd: '400',
      message: '',
    };

    // 토큰 검증
    const payload = verifyAccessToken(token);

    if (!payload) {
      response.message = 'Invalid or expired token';
      response.statusCd = 'E401';
      return NextResponse.json(response, { status: 401, statusText: response.message });
    }

    // 유효한 토큰이므로 요청을 핸들러로 전달
    return handler(req);
  };
}
