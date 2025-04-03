export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: "node", // ou "jsdom" si c'est un projet frontend
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};




// import nextJest from 'next/jest.js';

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   testEnvironment: 'jest-environment-jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },
//   preset: 'ts-jest',
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   transform: {}, // Ajout de cette ligne
// };

// export default createJestConfig(customJestConfig);
