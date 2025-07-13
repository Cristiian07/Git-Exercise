
// Config file for HTMLHint(HTML validator)

// .htmlhintrc.json

content = {
    "tagname-lowercase": true,        // Tag names must be lowercase
    "attr-lowercase": true,           // Attribute names must be lowercase
    "attr-value-double-quotes": true, // Attribute values must use double quotes
    "doctype-first": true,            // Doctype must be declared first in the document
    "id-unique": true,                // IDs must be unique on the page
    "img-req-alt": true,              // <img> tags must have alt attributes
    "spec-char-escape": true          // Special characters must be escaped properly
}



// Config file for Prettier (code formatter)

// .prettierrc.json

content = {
    "semi": true,              // Always add semicolons at the end of statements
    "trailingComma": "all",    // Add trailing commas wherever possible
    "singleQuote": true,       // Use single quotes instead of double quotes
    "printWidth": 80           // Wrap lines when they exceed 80 characters
}



// Config file for ESLint (JavaScript linter)

// eslint.config.mjs

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],        // Targets all JS files (including .mjs and .cjs)
        plugins: { js },                     // Uses the 'js' plugin
        extends: ["js/recommended"],         // Extends recommended ESLint rules for JS
    },
    {
        files: ["**/*.js"],                  // Targets plain .js files only
        languageOptions: { sourceType: "script" }, // Sets source type as script (not module)
    },
    {
        files: ["**/*.{js,mjs,cjs}"],       // Targets all JS files again
        languageOptions: { globals: globals.browser }, // Adds browser globals (window, document, etc.)
    }
]);



// Config file for Stylelint (CSS Validator)

// .stylelintrc.json

module.exports = {
  extends: "stylelint-config-standard", // Use standard recommended rules
  rules: {
    indentation: 2,                      // Enforce 2 spaces indentation
    "string-quotes": "double",          // Use double quotes for strings
    "color-hex-case": "lower",          // Use lowercase for hex colors
    "block-no-empty": true,             // Disallow empty blocks
    "unit-whitelist": ["em", "rem", "%", "s", "px"] // Allowed units only
  }
};