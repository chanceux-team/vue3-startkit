import antfu from '@antfu/eslint-config'

export default antfu({
  files: ['**/*.ts', '**/*.vue', '**/*.js'],
  ignores: [
    'node_modules',
    'dist',
    'components.d.ts',
  ],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
})
