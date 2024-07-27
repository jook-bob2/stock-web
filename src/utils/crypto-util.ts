import { HASH_ITERATIONS, HASH_KEY_SIZE, PEPPER } from '@/constants/hash';
import CryptoJS from 'crypto-js';

// PBKDF2 해싱 함수
export function hashPassword(password: string, salt: string, pepper: string, iterations: number, keySize: number) {
  const saltedPepperedPassword = password + pepper;
  return CryptoJS.PBKDF2(saltedPepperedPassword, salt, {
    keySize: keySize / 32,
    iterations,
  }).toString(CryptoJS.enc.Base64);
}

// Salt 생성 함수
export function generateSalt(length: number) {
  return CryptoJS.lib.WordArray.random(length).toString();
}

// 사용자가 입력한 비밀번호와 저장된 해시된 비밀번호를 검증하는 함수
export function verifyPassword(inputPassword: string, storedHashedPassword: string, salt: string) {
  const hashedInputPassword = hashPassword(inputPassword, salt, PEPPER, HASH_ITERATIONS, HASH_KEY_SIZE);
  return hashedInputPassword === storedHashedPassword;
}
