// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // @ts-expect-error - Seems to work anyway
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
      globals: {
        google: 'readonly',
      },
    },
    rules: {
      'no-empty-pattern': 0,
      'no-useless-escape': 0,
      'no-console': 0, // console.log ok
      'no-empty': 0, // catch(e) {}
      'no-unused-vars': 0, // ['warn', {argsIgnorePattern: '_$'}],
      'require-await': 'warn', // warn about 'async' functions not having an 'await' inside
      'no-constant-condition': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
        },
      ],
      'vue/max-attributes-per-line': 0,
      'vue/attributes-order': 0,
      'vue/multi-word-component-names': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/no-v-html': 0,
      'vue/html-indent': 0,
      'vue/order-in-components': 0,
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
    },
  },
)
