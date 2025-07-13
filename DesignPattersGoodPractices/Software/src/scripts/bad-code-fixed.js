const MAX_RETRIES = 5; // constant with UPPER_SNAKE_CASE

function checkData() { // descriptive function name
    const value = 10; // use const, proper naming and spacing
    if (value === MAX_RETRIES) { // strict equality and spaces
        console.log("ok"); // consistent double quotes
    } else {
        console.log("not ok"); // consistent formatting
    }
}

class UserProfile { // PascalCase for class names
    constructor(name) {
        this.name = name; // proper indentation and spacing
    }
}

checkData(); // descriptive function call
