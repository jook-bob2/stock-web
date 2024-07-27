/**
 * pepper는 비밀번호에 추가되는 고정된 비밀 값. 환경 변수로 설정하여 유출을 방지
   비밀번호에 pepper를 추가한 후 해싱
 */
export const PEPPER = process.env.PEPPER || 'defaultPepperValue';

// 값을 높여 해싱 과정을 더 어렵게 만듦 일반적으로 10,000 이상이 권장
export const HASH_ITERATIONS = process.env.HASH_ITERATIONS ? parseInt(process.env.HASH_ITERATIONS, 10) : 10000;

// 해시 결과의 비트 크기임. 256비트를 사용하면 강력한 해시를 생성할 수 있음.
export const HASH_KEY_SIZE = process.env.HASH_KEY_SIZE ? parseInt(process.env.HASH_KEY_SIZE, 10) : 256;
