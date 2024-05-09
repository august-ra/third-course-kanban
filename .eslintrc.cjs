module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    '@stylistic/js',
    'react-refresh',
  ],
  rules: {
    '@stylistic/js/arrow-parens': [ 'error', 'always' ],
    '@stylistic/js/arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
    '@stylistic/js/comma-dangle': [ 'error', 'always-multiline' ],
    '@stylistic/js/function-call-spacing': [ 'error', 'never' ],
    '@stylistic/js/indent': [ 'error', 2 ],
    '@stylistic/js/key-spacing': [ 'error', { 'align': 'value' } ],
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
    '@stylistic/js/operator-linebreak': [ 'error', 'before', {
      'overrides': {
        '=': 'ignore',
        '+=': 'ignore',
        '-=': 'ignore',
        '*=': 'ignore',
        '/=': 'ignore',
        '%=': 'ignore',
      }
    } ],
    '@stylistic/js/rest-spread-spacing': [ 'error', 'never' ],
    '@stylistic/js/semi': [ 'error', 'never', { 'beforeStatementContinuationChars': 'never' } ],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [ 'warn', { 'allowConstantExport': true } ],
  },
}
