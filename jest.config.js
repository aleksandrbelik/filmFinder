module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^Task1(.*)$': '<rootDir>/src/components/task1$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
