module.exports = {
        "plugins": [
            "es5"
        ]
    },
    "extends": [
        "eslint:recommended",
        "plugin:es5/no-es2015"
        ]
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "es5/no-arrow-functions": "error"
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
