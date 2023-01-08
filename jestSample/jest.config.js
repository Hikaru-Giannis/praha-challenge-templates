module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/functions.ts",
    "**/task.ts",
    "**/nameApiService.ts",
    "**/kawamoto_task.ts",
  ],
};
