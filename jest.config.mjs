/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}], // Escaping "."
  },
  testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};