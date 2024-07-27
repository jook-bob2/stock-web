export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: any) {
  if (error instanceof ApiError) {
    // API 에러 처리
    console.error(`API Error ${error.status}: ${error.message}`);
    // @todo: 다른 UI 업데이트를 수행
  } else if (error instanceof Error) {
    // 일반 JavaScript 에러 처리
    console.error('Unexpected error:', error.message);
  } else {
    // 알 수 없는 에러 처리
    console.error('An unknown error occurred');
  }
}
