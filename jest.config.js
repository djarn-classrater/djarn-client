module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./configs/enzyme.ts'],
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: [".next/", "node_modules/"],
  // snapshotSerializers: ["<rootDir>/enzyme-to-json/serializer"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "~/(.*)$": "<rootDir>/$1"
  }
}
