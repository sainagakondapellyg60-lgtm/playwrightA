# playwrightA
Playwright Automation

https://letcode.in/
https://automationexercise.com/
http://www.uitestingplayground.com/

try belowas well:
https://www.flightaware.com/


# command to create and open allure reports:

run this cmd for test execution and allure reports:
npx playwright test tests --reporter=line,allure-playwright

run to open report and generate
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

# to run tests for desired config file
npx playwright test --project=chromium --config=playwright.config.js


# run by test name
npx playwright test --grep @smoke

# add the test execution commands in the package.json file under script{}
and run: npm run Uitests
npm run <name Of script in package.json>

#jenkins
open the cmd in the jenkins folder and run
java -jar jenkins.war httpPort=8080