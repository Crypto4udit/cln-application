import globals from "globals";
// https://www.npmjs.com/package/eslint
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import * as nodeDependenciesPlugin from "eslint-plugin-node-dependencies"
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
    {languageOptions: { globals: globals.browser}},
  
    // https://eslint.org/docs/latest/rules/
    pluginJs.configs.recommended,
  
    // https://typescript-eslint.io/users/configs/
    // https://typescript-eslint.io/rules/
    ...tseslint.configs.recommended,
  
    // https://www.npmjs.com/package/eslint-plugin-node-dependencies
    ...nodeDependenciesPlugin.configs["flat/recommended"],
  
    // https://github.com/jsx-eslint/eslint-plugin-react
    ...reactPlugin.configs.flat.recommended,
  
    {
        plugins: {globals },
        ...globals.recommended,
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "prefer-const": "error",
            "no-console": "warn",
            "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
            eqeqeq: "off",
            "no-constant-binary-expression": "error",
        },
        ignores: ["node_modules/*"]
    }
];
