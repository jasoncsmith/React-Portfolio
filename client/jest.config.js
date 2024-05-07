/** @type {import('ts-jest').JestConfigWithTsJest} */

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/tests/setup-jest.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
}

module.exports = config
