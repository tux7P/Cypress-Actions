# π Cypress-Actions π 
![Tests Passing](https://github.com/tux7P/Cypress-Actions/actions/workflows/sanity.yml/badge.svg)

This repository focuses on running cypress tests in github actions. Where tests are run periodically using GitHub Action & Cron job.

# π Prerequisite
* Node.js
    * This project was created with v16.13.1
* Git
* A JavaScript IDE like Visual Studio Code
* Up-to-date versions of the following browsers:
    * Google Chrome
    * Mozilla Firefox
    * Microsoft Edge

# π Learnings

β Sanity tests with Cypress

β API tests with Cypress

β Performance tests with Cypress

β E2E UI tests with Cypress

β Generate test report with Allure & Github pages

β CICD with Github Actions

β Running nightly builds using Cron job


# π¦Ύ Technologies Used

1. Cypress
2. Sauce Labs
3. Artillery 
4. Github Actions

# πΌ Table Of Contents

1. Setup
2. Usage
3. API Testing
4. E2E UI testing with Cypress
5. Performance tests using Artillery
6. CICD using Github Actions
7. Generate report

# π Folder structure

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.
```
.
βββ README.md
βββ cypress
βΒ Β  βββ integration
βΒ Β      βββ api
βΒ Β      βΒ Β  βββ api.js
βΒ Β      βββ e2e
βΒ Β      βΒ Β  βββ home_spec.js
βΒ Β      βββ sanity.js
βββ cypress.json
βββ package-lock.json
βββ package.json

```
* **`fixtures`**: Holds optional JSON data for mocking
* **`integration`**: Holds the actual test files
* **`plugins`**: Allow you to customize how tests are loaded
* **`support`**: File runs before all tests and is a great place to write or load additional custom commands

# π‘ Features

* Test pipeline via Github Actions

# π Β Installation & Set Up
 
1. Install dependencies

   ```sh
   yarn
   ```

# π§ͺ Testing

* To run Sanity tests

   ```sh
   npm run cypress:sanity
   ```
* To run API tests

   ```sh
   npm run cypress:api
   ```
   
* π Reports:
Link: https://tux7p.github.io/Cypress-Actions/