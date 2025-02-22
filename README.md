# Workflow repo for the CA

English:

## This project is a front-end application / website with unit and end-to-end (E2E) testing configured using Vitest and Playwright.

Installation:

Nr.1 Clone the repository (i like to use github desktop):

nr.2 Navigate to the project directory.

nr.3 Install dependencies:
npm install.

---

Running Tests.

Unit test (Vitest)
Run unit tests using Vites:
npx vitest tests/unit

End-to-End Tests (playwrihgt):
Run E2E test using Playwright:
npx playwright test

---

Environment Variables:

Here we used .env in the root of the project. We use it in .githubignore, so no sensitive information is uploaded to internet (github).

Please make sure both playwright and Vitest is set up correctly using: npx playwright install, or install it using extentions provided using VSCode. (If you use that code editor).
