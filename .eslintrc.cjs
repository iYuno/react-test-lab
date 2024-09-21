module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    '@feature-sliced/eslint-config/rules/layers-slices',
    'plugin:@conarti/feature-sliced/recommended'
  ],
  plugins: [
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};