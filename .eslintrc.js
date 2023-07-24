module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended', 
        'plugin:react/recommended', 
        'plugin:react/jsx-runtime', 
        'plugin:@typescript-eslint/recommended', 
        'plugin:i18next/recommended', 
        'plugin:storybook/recommended'
    ],
    'overrides': [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        },
        {
            files: ['**/*.json'],
            rules: {
                'quotes': 'off',
                'semi': 'off',
            }
        },
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', '@typescript-eslint', 'i18next'],
    'rules': {
        'max-len': ['error', { 'code': 100, 'ignoreComments': true }],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true
        }],
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-var-requires': 'off',
    }
};