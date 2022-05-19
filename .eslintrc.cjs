module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  overrides: [
    {
      // Make sure ESLint can see every possible Node/TypeScript file
      files: ["*.cjs", "*.js", "*.jsx", "*.mjs", "*.ts", "*.tsx"],
    },
  ],
};
