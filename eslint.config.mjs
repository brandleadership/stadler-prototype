import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        languageOptions: {
            parserOptions: {
                // Set parser options for parsing JSX
                ecmaFeatures: { jsx: true },
                ecmaVersion: 2021,
                sourceType: 'module',
            },
            globals: globals.browser, // Add browser global variables
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    { ignores: ['.next/*'] },
    {
        rules: {
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'sort-keys': 'off',
            '@typescript-eslint': 'off',
            'spaced-comment': 'off',
            'no-console': 'off',
            'no-undef': 'off',
            'consistent-return': 'off',
            'func-names': 'off',
            'object-shorthand': 'off',
            'no-process-exit': 'off',
            'no-param-reassign': 'off',
            'no-return-await': 'off',
            'no-underscore-dangle': 'off',
            'class-methods-use-this': 'off',
            'no-constant-binary-expression': 'off',
            'react/no-unescaped-entities': 'off',
            'react/no-string-refs': 'off',
            'react/no-unknown-property': 'off',
        },
    },
];
