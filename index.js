/**
 * hello-js - Sample JavaScript code with intentional defects for static analysis testing
 *
 * This file contains common JavaScript defects that static analysis tools can detect:
 * - SQL Injection
 * - Command Injection
 * - XSS (Cross-Site Scripting)
 * - Path Traversal
 * - Hardcoded Credentials
 * - Prototype Pollution
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// SQL Injection defect
function getUserByName(username, db) {
    // SQLI: User input directly concatenated into SQL query
    const query = "SELECT * FROM users WHERE username = '" + username + "'";
    return db.query(query);
}

// Command Injection defect
function runCommand(userInput) {
    // COMMAND_INJECTION: User input passed to shell
    execSync('echo ' + userInput);
    execSync(userInput);
}

// XSS defect
function renderUserContent(userInput) {
    // XSS: User input directly inserted into HTML
    document.innerHTML = '<div>' + userInput + '</div>';
    return '<script>' + userInput + '</script>';
}

// Path Traversal defect
function readFile(filename) {
    // PATH_TRAVERSAL: User input used in file path without sanitization
    const basePath = '/var/data/';
    const filePath = basePath + filename;
    return fs.readFileSync(filePath, 'utf8');
}

// Hardcoded Credentials defect
function connectToDatabase() {
    // HARDCODED_CREDENTIALS
    const dbUser = 'admin';
    const dbPassword = 'secret123';
    const dbHost = 'localhost';
    return `mysql://${dbUser}:${dbPassword}@${dbHost}/mydb`;
}

// Prototype Pollution defect
function merge(target, source) {
    // PROTOTYPE_POLLUTION: Unsafe object merge
    for (const key in source) {
        if (typeof source[key] === 'object') {
            target[key] = merge(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// Insecure eval usage
function executeCode(userCode) {
    // CODE_INJECTION: eval with user input
    eval(userCode);
    return new Function(userCode)();
}

// Resource leak - no error handling
function processFile(filename) {
    // RESOURCE_LEAK: No proper cleanup on error
    const fd = fs.openSync(filename, 'r');
    const data = fs.readFileSync(fd);
    // Missing fs.closeSync(fd)
    return data;
}

// Null dereference
function getValue(data) {
    const result = data.key;
    // NULL_RETURNS: result could be undefined
    return result.toUpperCase();
}

// Main function
function main() {
    console.log('hello-js: Static Analysis Test Program');
    console.log('=======================================');
    console.log('This file contains intentional defects for testing.');
    console.log('Program completed successfully.');
}

main();

module.exports = {
    getUserByName,
    runCommand,
    renderUserContent,
    readFile,
    connectToDatabase,
    merge,
    executeCode,
    processFile,
    getValue
};
