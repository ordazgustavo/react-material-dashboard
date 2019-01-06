module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/no-did-update-set-state': 0,
    'import/prefer-default-export': 0
  },
  globals: {
    jest: true,
    it: true,
    describe: true,
    test: true,
    expect: true,
    afterEach: true
  }
}
