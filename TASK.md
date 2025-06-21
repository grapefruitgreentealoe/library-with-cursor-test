# ts-up을 사용한 라이브러리 초기 세팅 체크리스트

## 프로젝트 초기화

- [x] 프로젝트 디렉토리 생성
- [x] `npm init -y` 또는 `yarn init -y`로 package.json 초기화
- [x] Git 저장소 초기화 (`git init`)
- [x] .gitignore 파일 생성 (node_modules, dist, .DS_Store 등 포함)

## ts-up 설치 및 설정

- [x] ts-up 설치: `npm install ts-up --save-dev` 또는 `yarn add ts-up --dev` (tsup으로 대체)
- [x] TypeScript 설치: `npm install typescript --save-dev` 또는 `yarn add typescript --dev`
- [x] tsconfig.json 파일 생성 및 구성
- [x] ts-up 설정 확인 (package.json의 scripts 섹션에 build 명령어 추가)

## 프로젝트 구조 설정

- [x] src 디렉토리 생성
- [x] 메인 파일 생성 (src/index.ts)
- [x] 테스트 디렉토리 설정 (tests/ 또는 **tests**/)

## 의존성 설치

- [x] 필요한 개발 의존성 설치 (예: @types/node, eslint, prettier, jest 등)
- [x] 필요한 런타임 의존성 설치

## 설정 파일 구성

- [x] ESLint 설정 (eslint.config.js)
- [x] Prettier 설정 (.prettierrc)
- [x] Jest 또는 다른 테스트 프레임워크 설정 (jest.config.cjs)
- [x] package.json의 scripts 섹션 업데이트 (test, lint, format 등)

## 문서화

- [x] README.md 파일 작성 (설치 방법, 사용 예제 포함)
- [x] LICENSE 파일 추가
- [x] CONTRIBUTING.md 파일 작성 (선택사항)
- [x] API 문서 설정 (예: TypeDoc)

## 배포 준비

- [x] package.json의 main, types, files 필드 설정
- [x] npm 배포 설정 (.npmrc, .npmignore)
- [x] 버전 관리 전략 설정 (예: semantic-release)

## CI/CD 설정 (선택사항)

- [x] GitHub Actions 또는 다른 CI 서비스 설정
- [x] 테스트 자동화
- [x] 배포 자동화

## 품질 관리

- [x] 기본 테스트 작성
- [x] 코드 커버리지 설정
- [x] 보안 취약점 검사 설정 (예: npm audit)

## 추가된 작업

- [x] add 함수 안전성 개선 및 테스트 케이스 추가
- [x] BUG_FIX.md 문서 작성
- [x] RULE.md 문서 작성
- [x] SUMMARY.md 문서 작성
- [x] SETUP_GUIDE.md 문서 작성

## npm 배포 후 작업

- [ ] semantic-release 설정 테스트: 코드 변경 후 커밋 및 푸시하여 자동 배포 확인
- [ ] README 업데이트: 배포된 패키지 이름으로 설치 지침 업데이트
- [ ] 패키지 테스트: 새 프로젝트에서 패키지 설치 및 사용 테스트
- [ ] npm 페이지 확인: 패키지 정보가 올바르게 표시되는지 확인
- [ ] 버전 업데이트: 새 기능 추가 및 버전 업데이트 테스트

## Docusaurus 기반 문서 사이트 구축 및 마이그레이션

1. Docusaurus 프로젝트 생성
   - 명령어: `npx create-docusaurus@latest website classic`
   - 언어: TypeScript 선택
2. 기존 docs/의 .md 파일을 website/docs/로 복사
   - 예시: `cp -r docs/* website/docs/`
3. website 디렉토리로 이동 후 의존성 설치
   - `cd website && npm install`
4. 정적 빌드
   - `npm run build`
5. Vercel/Netlify 등에서 website/build 디렉토리를 publish directory로 지정해 배포
6. sidebar, config 등 원하는 대로 커스터마이징

※ 설치/빌드가 오래 걸릴 수 있으니, 네트워크 환경이 좋은 곳에서 진행 권장
