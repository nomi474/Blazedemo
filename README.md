<p align="center">
    <h1 align="center">Blazedemo TechChallenge Repository</h1>
    <br />
    <a href="https://www.cypress.io">
        <img align="center" src="https://avatars0.githubusercontent.com/u/8908513?s=200&v=4" alt="Logo" height="50">
    </a>
    <br />
</p>

## Table of Contents
* [Setting up project](#Setting-up-project)
* [Test execution](#test-execution)
  * [Execute tests with Cypress UI](#execute-tests-with-cypress-ui)
  * [Execute tests in terminal](#execute-tests-in-terminal)
* [Project Structure](#project-structure)
    
## Setting up project
1. Clone the repository
    ```text
    git clone https://github.com/nomi474/Blazedemo.git
    ```
2. Open the terminal (project ./root_dir) and execute the command below:
    ```text
    npm install
    ```
3. After the script is done, you will have all the dependencies and cypress TestRunner window will launch  

## Cypress Execution commands
### Execute tests with Cypress GUI
1. To open cypress GUI and run tests
```
npx cypress open
```
2. After the application started, you can:
    - select a test file to execute (*.spec.js)
    - Run all tests with `Run all specs` button

### Execute tests in terminal
- Open the terminal (in the project folder)
    - To execute test cases in a specific `*.spec.js` file, execute the following command:
        ```
         npx cypress run --spec cypress\integration\e2e-tests\login.spec.js
        ```
    - To execute all `*.spec.js` files under a folder, execute the following command:
        ```
        npx cypress run
        ```
        
## Project Structure (cypress Dir)
```text
├── fixtures
│   ├── laptop.json
│   ├── login.json
│   ├── monitor.json
│   ├── phone.json
├── integration
│   ├── e2e-tests
│   │    └── about_us.spec.js
│   │    └── login.spec.js
│   │    └── phone_purchase_with_login.spec.js
│   │    └── user_registration.spec.js
│   └── unit-tests
│   │    └── laptop_details_by_id.spec.js
│   │    └── monitor_details_by_id.spec.js
│   │    └── phone_details_by_id.spec.js
├── page-objects
│   ├── about_us_page.js
│   └── cart_page.js
│   └── common_page.js
│   └── home_page.js
│   └── login_modal.js
│   └── order_confirmation_modal.js
│   └── phone_description_page.js
│   └── phone_listings_page.js
│   └── place_order_modal.js
│   └── signup_modal.js
├── plugins
│   └── index.js
└── support
    ├── commands.js
    └── index.js
```

## User stories
User stories related to this project can be found in the UserStories.txt file.