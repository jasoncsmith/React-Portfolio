module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['src/setUpTests.js'], // CRA already looks for this
}
