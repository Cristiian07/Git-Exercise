// eslint .\src\scripts\eslint-example.js

let x = 1; // ESLint can warn: missing semicolon

if ((x = 2)) {
} // ESLint warns: assignment used instead of comparison
