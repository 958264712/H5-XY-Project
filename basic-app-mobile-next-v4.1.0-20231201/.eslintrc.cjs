/* eslint-disable no-undef */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended", "@vue/eslint-config-prettier"],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["**/__tests__/*.spec.{js,ts,jsx,tsx}"],
      extends: [],
    },
  ],
  rules: {
    "no-debugger": "warn",
    "no-console": "warn",
    // 'guard-for-in': 0,
    "no-var": "error",
    eqeqeq: ["error", "smart"],
    "no-unused-vars": ["off"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    camelcase: ["error", { properties: "always" }],
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "vue/multi-word-component-names": [
      "error",
      {
        //加入需要忽略的组件名,默认忽略index
        ignores: ["index"],
      },
    ],
    // 使用 ;
    semi: ["error", "always"],
    // 使用 "
    quotes: ["error", "double", { avoidEscape: true }],
    "linebreak-style": ["error", "unix"],
  },
};
