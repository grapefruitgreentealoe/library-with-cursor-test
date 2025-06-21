# 기여 가이드

이 프로젝트에 기여해 주셔서 감사합니다. 다음 가이드라인을 참고하여 기여해 주세요.

## 이슈 제출

버그 리포트나 기능 요청은 GitHub 이슈를 통해 제출해 주세요.

- 버그 리포트는 재현 방법, 예상 결과, 실제 결과를 포함해주세요.
- 기능 요청은 해당 기능이 필요한 이유와 사용 사례를 설명해주세요.

## 개발 환경 설정

1. 저장소를 복제합니다:

   ```bash
   git clone https://github.com/yourusername/library.git
   cd library
   ```

2. 의존성을 설치합니다:

   ```bash
   npm install
   ```

3. 개발 모드로 실행합니다:
   ```bash
   npm run dev
   ```

## 코드 스타일

- 모든 코드는 ESLint와 Prettier 규칙을 따라야 합니다.
- 코드를 제출하기 전에 `npm run lint`와 `npm run format`을 실행하세요.

## 테스트

- 새로운 기능이나 버그 수정에는 항상 테스트 코드를 포함해야 합니다.
- 모든 테스트는 `npm test` 명령어로 통과해야 합니다.

## 풀 리퀘스트 프로세스

1. 최신 main 브랜치에서 새로운 브랜치를 생성합니다:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. 변경 사항을 커밋합니다:

   ```bash
   git commit -m "feat: 변경 내용 설명"
   ```

3. 원격 저장소에 푸시합니다:

   ```bash
   git push origin feature/your-feature-name
   ```

4. GitHub에서 풀 리퀘스트를 생성합니다.

## 커밋 메시지 가이드라인

커밋 메시지는 다음 형식을 따라주세요:

- `feat: 새로운 기능 추가`
- `fix: 버그 수정`
- `docs: 문서 업데이트`
- `style: 코드 스타일 변경`
- `refactor: 코드 리팩토링`
- `test: 테스트 추가/수정`
- `build: 빌드 시스템 변경`

## 라이선스

이 프로젝트에 기여함으로써, 귀하는 MIT 라이선스 하에 귀하의 기여를 제공하는 데 동의합니다.
