require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': ['warn', { semi: true }],
    'import/prefer-default-export': 'off'
  }
};
