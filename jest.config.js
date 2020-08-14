module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupJest.ts'
  ],
  testRegex: 'spec\\.ts$'
};