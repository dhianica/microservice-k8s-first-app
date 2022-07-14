/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'plugins': ['sonarjs', '@typescript-eslint', '@typescript-eslint/tslint'],
  'root': true,
  'rules': {
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        'allowExpressions': false,
        'allowTypedFunctionExpressions': false,
        'allowHigherOrderFunctions': false,
        'allowDirectConstAssertionInArrowFunctions': true,
        'allowConciseArrowFunctionExpressionsStartingWithVoid': true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        'accessibility': 'no-public'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        'allowArgumentsExplicitlyTypedAsAny': true,
        'allowDirectConstAssertionInArrowFunctions': true,
        'allowHigherOrderFunctions': false,
        'allowTypedFunctionExpressions': false
      }
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        'ignoreParameters': true
      }
    ],
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        'hoist': 'all'
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/typedef': [
      'warn',
      {
        'parameter': true,
        'propertyDeclaration': true
      }
    ],
    '@typescript-eslint/unified-signatures': 'warn',
    'arrow-body-style': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': 'warn',
    'constructor-super': 'warn',
    'curly': 'warn',
    'default-case': 'warn',
    'dot-notation': 'off',
    'eol-last': 'warn',
    'eqeqeq': ['warn', 'always'],
    'guard-for-in': 'warn',
    'id-denylist': [
      'warn',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'warn',
    'max-len': [
      'warn',
      {
        'code': 140
      }
    ],
    'no-bitwise': 'warn',
    'no-caller': 'warn',
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'warn',
    'no-fallthrough': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-new-wrappers': 'warn',
    'no-restricted-imports': ['warn', 'rxjs'],
    'no-shadow': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'warn',
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true,
        'allowAfterSuper': true,
        'allowAfterThisConstructor': true
      }
    ],
    'no-unused-expressions': 'error',
    'no-unused-labels': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'radix': 'warn',
    'semi': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
    'spaced-comment': [
      'warn',
      'always',
      {
        'markers': ['/']
      }
    ]
  }
};
