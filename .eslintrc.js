module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:react/recommended",
        // "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": [1, "always"],
        "quotes": [1, "double", { "avoidEscape": true }],
        "react/prop-types": "off",
        "indent": "off",
        "quote-props": "off",
        "comma-dangle": "off",
        "import/prefer-default-export": "off"
    }
};
