const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * react apps.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ]
};
