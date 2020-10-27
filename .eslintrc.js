module.exports = {
  env: {
    jest: true,
  },
  extends: ['@bluebeam/eslint-config-atlas-react', 'plugin:testing-library/react'],
  globals: {
    fetch: 'readonly',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{j,t}s{x,}', 'jest.config.js', '**/jest.setup.ts'],
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^@assets', '^@native', '^@shared', '^@test'] }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['self'] }],
    'no-use-before-define': ['error', { variables: false }],
    'react/jsx-curly-brace-presence': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.ios.ts',
          '.ios.js',
          '.ios.tsx',
          '.ios.jsx',
          '.android.ts',
          '.android.js',
          '.android.tsx',
          '.android.jsx',
          '.native.ts',
          '.native.js',
          '.native.tsx',
          '.native.jsx',
          '.json',
        ],
      },
    },
  },
};
