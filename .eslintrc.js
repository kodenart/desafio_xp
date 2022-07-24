module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "no-unused-vars": ["warn"],
        "no-console": "off",
        "func-names": "off",
        "semi": [2, "always"]
    }
};