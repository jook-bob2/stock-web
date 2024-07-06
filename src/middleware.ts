import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const clientIp = req.cookies.get('client-ip');

  /**
   * @description 클라이언트 IP 쿠키 저장
   */
  if (!clientIp) {
    console.log('###### IP가 없으므로 셋팅 ######');
    const host = req.headers.get('host');
    let domain: string = host ?? '';

    if (host?.includes(':')) {
      if (host?.includes('localhost')) {
        domain = 'localhost';
      }
    } else {
      domain = host?.split(':')[0] ?? '';
    }

    const FALLBACK_IP_ADDRESS = '0.0.0.0';
    const ADDRESS_DOT_CNT = 4; // ip address dot 개수
    const forwardedFor = req.headers.get('x-forwarded-for');
    let newClientIp = ''; // 새로운 클아이언트 IP

    if (forwardedFor && forwardedFor.split('.').length === ADDRESS_DOT_CNT) {
      newClientIp = forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
    } else {
      newClientIp = req.headers.get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
    }
    res.cookies.set('client-ip', newClientIp, {
      httpOnly: true,
      expires: undefined,
      secure: true,
      path: '/',
      domain,
      sameSite: 'strict',
      priority: 'high',
    });
  }

  return res;
}

// 미들웨어 접근 조건 설정
// export const config = {
//   matcher: '/',
// };
