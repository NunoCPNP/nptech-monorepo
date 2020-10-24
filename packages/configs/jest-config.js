module.exports = {
  verbose: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/tests/**', '!**/coverage/**', '!jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/'],
}
