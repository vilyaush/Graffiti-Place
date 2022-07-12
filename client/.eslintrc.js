module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['CustomLabel'],
      labelAttributes: ['inputLabel'],
      controlComponents: ['CustomInput'],
      assert: 'both',
      depth: 3,
    }],
    'no-use-before-define': 'off',
  },
};
