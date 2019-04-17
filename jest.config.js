module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^Task1(.*)$': '<rootDir>/src/components/task1$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Common(.*)$': '<rootDir>/src/components/common$1',
    '^Styles(.*)$': '<rootDir>/src/styles$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
