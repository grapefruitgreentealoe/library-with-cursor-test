# 프로젝트 설정 가이드

이 문서는 프로젝트의 초기 설정 과정을 자세히 설명합니다.

## 1. 프로젝트 초기화

```bash
# 프로젝트 디렉토리 생성
mkdir -p src tests

# package.json 초기화
npm init -y

# Git 저장소 초기화
git init
```

## 2. 기본 패키지 설치

```bash
# TypeScript 및 tsup 설치
npm install typescript tsup --save-dev

# 테스트 도구 설치
npm install jest @types/jest ts-jest --save-dev

# 코드 품질 도구 설치
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
npm install typescript-eslint --save-dev

# 문서화 도구 설치
npm install typedoc typedoc-plugin-markdown --save-dev
```

## 3. 설정 파일 생성

### 3.1 TypeScript 설정 (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src/**/*", "tests/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 3.2 ESLint 설정 (eslint.config.js)

```javascript
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // 여기에 커스텀 규칙을 추가할 수 있습니다
    },
  },
  ...tseslint.configs.recommended
);
```

### 3.3 Prettier 설정 (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "endOfLine": "auto"
}
```

### 3.4 Jest 설정 (jest.config.cjs)

```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};
```

### 3.5 TypeDoc 설정 (typedoc.json)

```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "name": "Library API Documentation",
  "includeVersion": true,
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeExternals": true,
  "readme": "README.md",
  "plugin": ["typedoc-plugin-markdown"]
}
```

## 4. package.json 스크립트 설정

```json
"scripts": {
  "build": "tsup src/index.ts --format cjs,esm --dts",
  "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
  "test": "jest --config jest.config.cjs",
  "test:watch": "jest --watch --config jest.config.cjs",
  "lint": "eslint 'src/**/*.ts' 'tests/**/*.ts'",
  "lint:fix": "eslint 'src/**/*.ts' 'tests/**/*.ts' --fix",
  "format": "prettier --write 'src/**/*.ts' 'tests/**/*.ts'",
  "docs": "typedoc",
  "prepublishOnly": "npm run build"
}
```

## 5. 배포 설정

### 5.1 .npmignore

```
# 소스 및 설정 파일
src/
tests/
.eslintrc.js
.prettierrc
eslint.config.js
jest.config.cjs
tsconfig.json
typedoc.json

# 문서
docs/
*.md
!README.md
!LICENSE

# 개발 도구 설정
.vscode/
.idea/
.github/
.git/
.gitignore

# 빌드 및 테스트 결과
coverage/
.nyc_output/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 5.2 .npmrc

```
package-lock=true
save-exact=true
access=public
```

## 6. 프로젝트 구조

```
library/
├── dist/               # 빌드 결과물
├── docs/               # API 문서
├── src/                # 소스 코드
│   └── index.ts
├── tests/              # 테스트 코드
│   └── index.test.ts
├── .gitignore
├── .npmignore
├── .npmrc
├── .prettierrc
├── BUG_FIX.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── RULE.md
├── SETUP_GUIDE.md
├── SUMMARY.md
├── TASK.md
├── eslint.config.js
├── jest.config.cjs
├── package.json
├── tsconfig.json
└── typedoc.json
```
