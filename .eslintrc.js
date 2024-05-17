module.exports = {
    "env": {
        "browser": true,
        "es5": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-cond-assign": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "no-unused-vars": "off",
        "semi": [
            "error",
            "always"
        ]
    }
};
