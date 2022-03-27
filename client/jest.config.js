module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: [
    "<rootDir>/cypress/"
  ]
};
