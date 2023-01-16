import jest from 'jest';

const jestConfig: jest.Config = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
};

export default jestConfig;
