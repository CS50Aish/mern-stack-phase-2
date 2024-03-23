const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const expect = require('chai/lib/chai/interface/expect');

// Read the HTML file and set up a DOM Environment
const html = fs.readFileSync(path.resolve(__dirname, '/home/labuser/Desktop/mern-stack-phase-2/dom-testing/index.html'), 'utf-8');
const { window } = new JSDOM(html);
const { document } = window;

// Load the app.js file and attach it to the window
const appJsPath = path.resolve(__dirname, '/home/labuser/Desktop/mern-stack-phase-2/dom-testing/app.js');
const appJsCode = fs.readFileSync(appJsPath, 'utf-8');
const script = document.createElement('script');
script.textContent = appJsCode;
document.body.appendChild(script);

// Jest Test
test('Update Button Updates greeting text', () => {
    const updateButton = document.getElementById('updateButton');
    const greeting = document.getElementById('greeting');

    // Initial State
    expect(greeting.textContent).toBe('Hello, World!!');

    // Simulate a button click
    updateButton.click();

    // After Click
    expect(greeting.textContent).toBe('Hello, World!!');
})