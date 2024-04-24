module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/shared/components/ui/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unicorn', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['!@/*'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      1,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['components/**/*'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
    {
      files: ['src/shared/hooks/*.ts'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
            },
          },
        ],
      },
    },
  ],
};
