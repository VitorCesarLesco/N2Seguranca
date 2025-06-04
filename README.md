# N2Seguranca

## Running Tests

This project uses **Jest** with **Puppeteer** for browser testing. To run the tests:

```bash
npm install
npm test
```

The test file `test/navigation.test.js` loads `index.html` in a headless browser and simulates arrow key presses to verify that the slide counter updates.
