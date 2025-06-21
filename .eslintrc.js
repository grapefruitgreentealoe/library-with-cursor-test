module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // 여기에 커스텀 규칙을 추가할 수 있습니다
  },
};
