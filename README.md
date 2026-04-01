# playwrightA
Playwright Automation
https://www.ministryoftesting.com/articles/websites-to-practice-testing
https://playground.bondaracademy.com
https://letcode.in/
https://automationexercise.com/
http://www.uitestingplayground.com/

try belowas well:
https://www.flightaware.com/

# open Playwright UI for test execution debugging purpose
npx playwright test --ui

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

# run test cases via scripts in  package.json
npm run currentTest

# how to start jenkins server and what you require for setup
we need java to be configured in our syste and also in environment variables
navigate to the jenkins.war file ("C:\Users\saina\Desktop\Softwares\jenkins.war") 
and open cmd on the same path and then run below cmd
java -jar jenkins.war --httpPort=8080

once successfully running, then lauch browser and navigate to http://localhost:8080/
using above port

# to keep aluure server on and upon refresh it will load latest test execution report 
terminal 1 
allure open allure-report --port 4040

terminal 2
run tests with genrate report


# logger reports:
npm install winston --save
npm install @types/winston --save-dev

# playwright cli (like mcp but uses less tokens)
https://github.com/microsoft/playwright-cli

to install npx playwright-cli install --skills
