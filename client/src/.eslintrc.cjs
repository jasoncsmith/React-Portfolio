module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  ignorePatterns: ['build', '.eslintrc.cjs', 'global.d.ts', 'coverage', 'node_modules'],
  globals: {
    __dirname: 'readonly',
    module: 'readonly',
    process: true,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0, // node files
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 2, // undefined var(s) in code
    'no-undefined': 0, // comparisons to undefined
    'no-debugger': 1,
    'no-unreachable': 1,
    'no-extra-semi': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-useless-escape': 1,
    'no-console': 1,
    'no-extra-boolean-cast': 1,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    semi: 0,
    'import/namespace': 0,
    'import/default': 0,
  },
}
