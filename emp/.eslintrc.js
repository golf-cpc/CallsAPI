/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'prefer-destructuring': ['error', { 'object': true, 'array': false }],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': ['error', { 'allow': ['state'] }],
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'semi': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
