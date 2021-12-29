module.exports = {
  verbose: true,
  rootDir: '../',
  clearMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/config/babel.transformer.js',
  },
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/file.mock.js',
    '.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  collectCoverageFrom: ['<rootDir>/src/core/**/*.{js,jsx}', '<rootDir>/src/features/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['index.*'],
  coverageThreshold: {
    global: {
      statements: 80,
      functions: 80,
      lines: 80,
    },
  },
};
