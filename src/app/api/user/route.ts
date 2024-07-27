import { NextRequest, NextResponse } from 'next/server';
import executeQuery from '@/lib/db';
import { ResponseType } from '@/types/api';
import { UserRequestType, UserResponseType } from '@/types/models/user';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const response: ResponseType<UserResponseType> = {
    data: null,
    message: 'SUCCESS',
    statusCd: 'S200',
  };

  try {
    const data = await executeQuery<UserRequestType, UserResponseType[]>(
      `SELECT id, email, name, hp, birth_date, join_date FROM user WHERE id=${id}`,
    );

    if (data) {
      if (data.length > 0 && data[0]) {
        const { ...resData } = data[0];
        response.data = resData;
        return NextResponse.json(response);
      }
      response.statusCd = 'E404';
      response.message = 'Not Found';
      return NextResponse.json(response, { status: 404 });
    }
  } catch (error) {
    console.error('error ', error);
    response.message = 'FAIL';
    response.statusCd = '400';
    return NextResponse.json(response, { status: 400 });
  }

  return NextResponse.json(response);
}
