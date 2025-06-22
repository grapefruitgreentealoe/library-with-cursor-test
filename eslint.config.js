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
    ignorePatterns: ['website/*'],
  },
  ...tseslint.configs.recommended
);
