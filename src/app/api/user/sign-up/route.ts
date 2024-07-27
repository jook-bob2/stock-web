import { NextRequest, NextResponse } from 'next/server';
import executeQuery from '@/lib/db';
import { DateTime } from 'luxon';
import { UserSignUpRequest, UserSignUpResponse } from '@/types/models/user';
import { ResponseType } from '@/types/api';
import { QueryError, ResultSetHeader } from 'mysql2';
import { generateSalt, hashPassword } from '@/utils/crypto-util';
import { HASH_ITERATIONS, HASH_KEY_SIZE, PEPPER } from '@/constants/hash';

/**
 * @description 회원가입 API
 * @param request
 * @returns
 */
export async function POST(request: NextRequest) {
  const { email, passwd, name, nickname, hp, birthDate }: UserSignUpRequest = await request.json();

  const response: ResponseType<UserSignUpResponse> = {
    data: 0,
    statusCd: '400',
    message: '',
  };

  if (!email || !passwd || !name || !nickname || !hp || !birthDate) {
    response.message = 'Bad request.';
    response.statusCd = '400';
    return NextResponse.json(response, { status: 400, statusText: response.message });
  }

  // 생년월일 형식 검증 (YYYY-MM-DD)
  if (!DateTime.fromFormat(birthDate, 'yyyyMMdd').isValid) {
    response.message = 'Invalid birthDate format. Expected format: YYYY-MM-DD';
    response.statusCd = '400';
    return NextResponse.json(response, { status: 400, statusText: response.message });
  }

  try {
    // 이메일, 닉네임, 핸드폰 번호 중복 체크 쿼리
    const checkDuplicateQuery = `
      SELECT 1 FROM user
      WHERE email = ? OR nickname = ? OR hp = ?
    `;

    const dataArr = await executeQuery<string[], { email: string }[]>(checkDuplicateQuery, [email, nickname, hp]);
    if (dataArr && dataArr.length > 0) {
      response.data = 0;
      response.message = '이메일/닉네임/휴대폰번호는 중복 될 수 없습니다.';
      response.statusCd = '400';
      return NextResponse.json(response, { status: 400, statusText: 'Duplicate error' });
    }
  } catch (error) {
    console.error('select email error ', error);
    response.statusCd = '500';
    response.message = 'Internal server error';

    return NextResponse.json(response, { status: 500, statusText: 'Internal server error' });
  }

  try {
    // 현재 날짜와 시간을 reg_date로 생성 (YYYY-MM-DD HH:mm:ss)
    const joinDate = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    // 사용자 비밀번호 해싱
    const salt = generateSalt(16);
    const hashedPassword = hashPassword(passwd, salt, PEPPER, HASH_ITERATIONS, HASH_KEY_SIZE);
    const query = `
        INSERT INTO user (email, passwd, name, nickname, hp, birth_date, join_date, salt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
    const result = await executeQuery<string[], ResultSetHeader>(query, [
      email,
      hashedPassword,
      name,
      nickname,
      hp,
      birthDate,
      joinDate,
      salt,
    ]);

    response.data = result?.insertId !== undefined ? 1 : 0;
    response.statusCd = 'S200';
    response.message = 'SUCCESS';

    return NextResponse.json(response);
  } catch (error) {
    console.error('error ', error);
    const err = error as QueryError;
    const { code } = err;
    if (code === 'ER_DUP_ENTRY') {
      // 중복 된 데이터가 있는 경우
      response.data = 0;
      response.message = 'Duplicate error';
      response.statusCd = '400';
      return NextResponse.json(response, { status: 400, statusText: response.message });
    }

    response.statusCd = '500';
    response.message = 'Internal server error';

    return NextResponse.json(response, { status: 500, statusText: response.message });
  }
}
