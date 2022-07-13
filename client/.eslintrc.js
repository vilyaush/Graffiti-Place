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
    'associated-control': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'off',
<<<<<<< HEAD
    'react/function-component-definition': 'off',
=======
    'import/prefer-default-export': 0,
>>>>>>> a3383167f18cedb64331ae651a5c5771909648ce
  },
};
