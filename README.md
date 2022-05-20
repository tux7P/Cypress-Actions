# Cypress-Actions
![Tests Passing](https://github.com/tux7P/Cypress-Actions/actions/workflows/sanity.yml/badge.svg)

This repository focuses on running cypress tests in github actions. Where tests are run periodically using GitHub Action & Cron job.

# Prerequisite
* npm
* Git
* Chrome Browser
* Code Editor

# 🎓 Learnings

✅ Sanity tests with Cypress

✅ API tests with Cypress

⌛ Performance tests with Cypress

✅ E2E UI tests with Cypress

⌛ Generate test report

✅ CICD with Github Actions

⌛ Running nightly builds using Cron job

# 🦾 Technologies Used

1. Cypress
2. Sauce Labs
3. Artillery 
4. Github Actions

# 💼 Table Of Contents

1. Setup
2. Usage
3. API Testing
4. E2E UI testing with Cypress
5. Performance tests using Artillery
6. CICD using Github Actions
7. Generate report

# 📚 Folder structure

These folders hold end-to-end tests and supporting files for the Cypress Test Runner.
```
.
├── README.md
├── cypress
│   └── integration
│       ├── api
│       │   └── api.js
│       ├── e2e
│       │   └── home_spec.js
│       └── sanity.js
├── cypress.json
├── package-lock.json
└── package.json

```
* **`fixtures`**: Holds optional JSON data for mocking
* **`integration`**: Holds the actual test files
* **`plugins`**: Allow you to customize how tests are loaded
* **`support`**: File runs before all tests and is a great place to write or load additional custom commands

# 💡 Features

* Test pipeline via Github Actions

# 🛠 Installation & Set Up
 
1. Install dependencies

   ```sh
   yarn
   ```

# 🧪 Testing

* To run Sanity tests

   ```sh
   npm run cypress:sanity
   ```
* To run API tests

   ```sh
   npm run cypress:api
   ```