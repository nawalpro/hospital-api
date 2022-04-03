"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: "./src/.*\\.(test|spec)?\\.(js|ts)$",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    roots: ["<rootDir>/src"],
};
exports.default = config;
