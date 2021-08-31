module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
    indent: "off",
    "no-unused-vars": "warn",
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "prettier/prettier": "error",
  },
};
