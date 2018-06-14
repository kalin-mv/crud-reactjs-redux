module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": false
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/display-name": [
            0,
            { "ignoreTranspilerName": false }
        ],
        "react/prop-types": [
            0,
            { "ignore": "ignore", "customValidators": "customValidator" }
          ]
    }
};