/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    'dist',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'eol-last': [
      'error',
      'always',
    ],
    'indent': [
      'error',
      2,
      { SwitchCase: 1 },
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 1,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'array-element-newline': [
      'error',
      'always',
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          multiline: true,
          minProperties: 2,
        },
        'ImportDeclaration': {
          multiline: true,
          minProperties: 2,
        },
        'ExportDeclaration': 'always',
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'object-property-newline': 'error',
    'no-trailing-spaces': [
      'error',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'no-multiple-empty-lines': [
      'error',
      { max: 1 },
    ],
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    'vue/order-in-components': 'off',
  },
}
