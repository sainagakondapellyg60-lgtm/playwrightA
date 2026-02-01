# playwrightA
Playwright Automation

https://letcode.in/
https://automationexercise.com/
http://www.uitestingplayground.com/


# command to create and open allure reports:
run this cmd for test execution and allure reports:
npx playwright test tests --reporter=line,allure-playwright

run to open report
allure generate allure-results --clean -o allure-report

allure open allure-report

# to run tests for desired config file
npx playwright test --project=chromium --config=playwright.config.js


# run by test name
npx playwright test --grep @smoke



