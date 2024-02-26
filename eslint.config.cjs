const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  files: ['**/*.js', '**/*.ts', '**/*.vue'],
  rules: {
    'style/semi': ['error', 'always'],
  },
  ignores: [
    'dist',
    'node_modules',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
})
