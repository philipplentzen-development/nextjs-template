/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "./src/**/*.{ts,js,jsx,tsx}": ["eslint --fix", "prettier . --write"],
};

export default lintStagedConfig;
