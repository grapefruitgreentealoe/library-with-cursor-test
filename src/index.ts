/**
 * 라이브러리의 메인 기능을 제공하는 파일입니다.
 */

/**
 * 간단한 덧셈 함수 예제
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 두 숫자의 합
 */
export function add(a: number, b: number): number {
  // 입력값이 숫자인지 확인
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('인자는 모두 숫자여야 합니다.');
  }

  // NaN 체크
  if (isNaN(a) || isNaN(b)) {
    throw new TypeError('NaN은 유효한 입력이 아닙니다.');
  }

  // Infinity 체크
  if (!isFinite(a) || !isFinite(b)) {
    throw new RangeError('Infinity는 유효한 입력이 아닙니다.');
  }

  return a + b;
}

/**
 * 간단한 곱셈 함수 예제
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 두 숫자의 곱
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

// 라이브러리의 메인 기능들을 여기에 추가하세요
