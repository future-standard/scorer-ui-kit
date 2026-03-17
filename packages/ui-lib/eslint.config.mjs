import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  // Migrated from .eslintignore
  {
    ignores: ['dist/', 'build/', 'node_modules/', '.snapshots/', '**/*.min.js'],
  },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: '19' },
    },
    rules: {
      // Disable ESLint core rules that TypeScript's compiler handles
      'no-undef': 'off',
      'no-redeclare': 'off',

      // Disable base rule — replaced by TypeScript-aware version below
      'no-unused-vars': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrors: 'none', // preserve legacy behaviour: don't check catch clause vars
      }],

      // Formatting
      semi: ['error', 'always'],

      // React — disabled to match legacy config
      'react/prop-types': 'off',
      'react/jsx-handler-names': 'off',
      'react/jsx-fragments': 'off',
      'react/no-unused-prop-types': 'off',

      // React Hooks (replaces plugin:react-hooks/recommended)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // Test files — add vitest globals (describe, it, expect, etc.)
  {
    files: ['src/**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // vitest exposes the same core globals as jest
      },
    },
  },
];
