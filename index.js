module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "@typescript-eslint/array-type": [
            "error",
            {
                default: 'generic'
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: false // ?
            }
        ],
        "@typescript-eslint/member-delimiter-style": 'error',
        "@typescript-eslint/member-ordering": 'error',
        "@typescript-eslint/no-explicit-any": 'error',
        "@typescript-eslint/prefer-ts-expect-error": 'warn',
        "prefer-const": 'error',
        "no-var": 'error',
        "no-new-object": 'error',
        "object-shorthand": ['error', 'always'],
        "quote-props": ['error', 'consistent-as-needed'],
        "object-curly-newline": ['error', { 'consistent': true }],
        "object-curly-spacing": ['error', 'always'],
        "quotes": ['error', 'single'],
        "prefer-template": 'warn',
        "@typescript-eslint/no-loop-func": 'error',
        "prefer-rest-params": 'error',
        "@typescript-eslint/space-before-blocks": 'error',
        "no-param-reassign": 'error',
        "function-paren-newline": ['error', 'multiline-arguments'],
        "prefer-arrow-callback": 'error',
        "import/order": ["error", {"groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]}],
        "@typescript-eslint/no-unused-vars": 'error',
        'eqeqeq': 'error',
        'brace-style': 'error',
        '@typescript-eslint/indent': ['error', 'tab'],
        '@typescript-eslint/space-infix-ops': 'error',
        'eol-last': ["error", "always"],
        'max-len': ['error', {'code': 160}],
        'no-trailing-spaces': 'error'
    }
}
