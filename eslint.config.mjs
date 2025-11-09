import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // React plugin recommended config (not iterable, so we include directly)
  {
    ...reactPlugin.configs.recommended,
  },

  // Prettier plugin recommended config
  {
    ...prettierPlugin.configs.recommended,
  },

  // Custom settings
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'warn',
    },
  },
];
