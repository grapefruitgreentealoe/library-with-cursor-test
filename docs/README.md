Library API Documentation / [Exports](modules.md)

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

## 기술 스택

이 프로젝트는 다음과 같은 기술 스택을 사용합니다:

### 핵심 기술

- **TypeScript**: 정적 타입 지원을 통한 안정적인 코드 작성
- **tsup**: 빠르고 효율적인 TypeScript 빌드 도구
- **Jest**: 단위 테스트 프레임워크

### 코드 품질

- **ESLint**: 코드 스타일 및 오류 검사
- **Prettier**: 일관된 코드 포맷팅
- **TypeDoc**: API 문서 자동 생성

### CI/CD 및 배포

- **GitHub Actions**: 자동화된 테스트, 빌드, 배포 파이프라인
- **semantic-release**: 커밋 메시지 기반 자동 버전 관리 및 배포

## 주요 기능

### 자동 버전 관리

커밋 메시지 컨벤션에 따라 자동으로 버전이 관리됩니다:

- `fix:`: 패치 버전 증가 (예: 1.0.0 → 1.0.1)
- `feat:`: 마이너 버전 증가 (예: 1.0.0 → 1.1.0)
- `feat:` + `BREAKING CHANGE:`: 메이저 버전 증가 (예: 1.0.0 → 2.0.0)

### 자동 문서화

TypeDoc을 통해 소스 코드에서 API 문서가 자동으로 생성됩니다.

### 멀티 포맷 지원

CommonJS와 ES Module 두 가지 포맷으로 빌드되어 다양한 환경에서 사용 가능합니다.

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

# 문서 생성
npm run docs
```

## 라이선스

MIT
