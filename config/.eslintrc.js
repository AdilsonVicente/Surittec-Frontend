module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.dev.js',
      },
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  plugins: ['eslint-plugin-import', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'strict': 0,
    'react/prop-types': 0,
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'capitalized-comments': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'id-length': [
      'error',
      {
        exceptions: ['_', 'i'],
      },
    ],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'line-comment-position': 0,
    'max-classes-per-file': ['error', 5],
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: '^import .*',
      },
    ],
    'multiline-comment-style': 0,
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error'],
    'no-console': 0,
    'no-inline-comments': 0,
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-plusplus': 0,
    'no-sync': [
      'error',
      {
        allowAtRootLevel: true,
      },
    ],
    'no-ternary': 0,
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    'no-undefined': 0,
    'no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
        variables: true,
      },
    ],
    'no-warning-comments': 'warn',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: 'never',
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'one-var': ['error', 'never'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'require-jsdoc': 0,
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    'switch-colon-spacing': 'error',
    'semi': ['error', 'always'],
    'import/no-default-export': 'error',
    'id-length': ['error', { min: 3, exceptions: ['_', '$', 'i', 'to', 'fn', 'cc', 'dc', 'ag', 'id', 'is'] }],
    'max-lines': ['error', 256],
    'complexity': ['error', 6],
    'max-depth': ['error', 2],
    'max-params': ['error', 5],
    'no-throw-literal': 'error',
    'object-shorthand': ['error', 'always', { ignoreConstructors: true }],
    'max-len': ['error', { code: 120, ignorePattern: '^import .*' }],
    'max-nested-callbacks': ['error', 3],
    'no-nested-ternary': 'error',
    // 'max-statements': ['error', 10],
    // 'max-lines-per-function': ['error', 20],
    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            pattern: '__mocks__/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'util/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'styles/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'core/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'groups': ['external', 'internal', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
