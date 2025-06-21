import { add, multiply } from '../src/index';

describe('라이브러리 기본 함수 테스트', () => {
  describe('add 함수', () => {
    it('두 양수를 더해야 합니다', () => {
      expect(add(1, 2)).toBe(3);
    });

    it('양수와 음수를 더해야 합니다', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('두 음수를 더해야 합니다', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('소수점 숫자를 더해야 합니다', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('0과 숫자를 더해야 합니다', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    it('NaN을 입력하면 오류를 발생시켜야 합니다', () => {
      expect(() => add(NaN, 1)).toThrow(TypeError);
      expect(() => add(1, NaN)).toThrow(TypeError);
    });

    it('Infinity를 입력하면 오류를 발생시켜야 합니다', () => {
      expect(() => add(Infinity, 1)).toThrow(RangeError);
      expect(() => add(1, Infinity)).toThrow(RangeError);
      expect(() => add(-Infinity, 1)).toThrow(RangeError);
    });

    it('숫자가 아닌 값을 입력하면 오류를 발생시켜야 합니다', () => {
      // @ts-expect-error: 타입스크립트 타입 체크 무시
      expect(() => add('1', 2)).toThrow(TypeError);
      // @ts-expect-error: 타입스크립트 타입 체크 무시
      expect(() => add(1, '2')).toThrow(TypeError);
      // @ts-expect-error: 타입스크립트 타입 체크 무시
      expect(() => add(null, 1)).toThrow(TypeError);
      // @ts-expect-error: 타입스크립트 타입 체크 무시
      expect(() => add(1, undefined)).toThrow(TypeError);
    });
  });

  describe('multiply 함수', () => {
    it('두 양수를 곱해야 합니다', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('양수와 음수를 곱해야 합니다', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    it('두 음수를 곱해야 합니다', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });
});
