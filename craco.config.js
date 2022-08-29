const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: ".",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
  jest: {
    configure: (jestConfigBase, { rootDir }) => {
      const jestConfig = { ...jestConfigBase };

      // We're testing in a browser environment
      jestConfig.testEnvironment = "jsdom";

      jestConfig.moduleNameMapper = {
        // How the DOM looks in tests isn't that important. Mock stylesheets accordingly.
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",

        // Absolute path aliases. These mirror the setup in tsconfig.json
        "^@/(.*)$": `${rootDir}/src/$1`,
        "^@test/(.*)$": `${rootDir}/test/$1`,
      };

      jestConfig.transformIgnorePatterns = [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      ];

      // Load environment variables and set up test utilities
      jestConfig.setupFilesAfterEnv = [`${rootDir}/src/jest.setup.ts`];
      jestConfig.testPathIgnorePatterns = [`${rootDir}/cypress/`];

      return jestConfig;
    },
  },
};
