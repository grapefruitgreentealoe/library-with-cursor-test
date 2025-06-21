# Library

간단한 TypeScript 라이브러리입니다.

## 설치

```bash
npm install library
```

또는

```bash
yarn add library
```

## 사용 방법

```typescript
import { add, multiply } from 'library';

// 덧셈 함수 사용
const sum = add(5, 3); // 8

// 곱셈 함수 사용
const product = multiply(5, 3); // 15
```

## 개발

### 필수 조건

- Node.js (>= 14.x)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 스크립트

```bash
# 개발 모드로 실행
npm run dev

# 빌드
npm run build

# 테스트 실행
npm test

# 린트 실행
npm run lint

# 린트 수정
npm run lint:fix

# 코드 포맷팅
npm run format
```

## 라이선스

MIT
