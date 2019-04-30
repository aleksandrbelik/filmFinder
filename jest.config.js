module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(css|less)$': './tests/mocks/styleMock.js'
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Common(.*)$': '<rootDir>/src/components/common$1',
    '^State(.*)$': '<rootDir>/src/state$1',
    '^Styles(.*)$': '<rootDir>/src/styles$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
