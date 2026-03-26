import { test as base, TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';
export * from '@playwright/test';

type MyFixtures = {
    tagMapper: void;
};

export const test = base.extend<MyFixtures>({
    tagMapper: [
        async ({ }, use: () => Promise<void>, testInfo: TestInfo) => {
            const tags: string[] = testInfo.title.match(/@[\w-]+/g) || []
            let featureSet = false;
            let storySet = false;
            tags?.forEach(tag => {
                const value = tag.replace('@', '')
                if (value === 'ui') {
                    allure.label('parentSuite', 'UI');

                } else if (value === 'api') {
                    allure.label('parentSuite', 'API');
                }
                else if (!featureSet && ['DM', 'SBP', 'BTU'].includes(value)) {
                    allure.label('feature', value.toUpperCase());
                    featureSet = true;
                } else if (!storySet && ['button', 'checkbox', 'date', 'dropdown', 'modal', 'alert', 'ID'].includes(value)) {
                    allure.label('story', value.toUpperCase());
                    storySet = true;

                }
            });

            allure.label('owner', 'Ganesh');
            if (tags.includes('@smoke')) {
                allure.label('severity', 'critical');
            } else {
                allure.label('severity', 'normal');
            }
            if (!featureSet) {
                allure.label('feature', 'GENERAL');
            }
            if (!storySet) {
                allure.label('story', 'default');
            }

            await use();//continue execution to actual test
        }, { auto: true }] //always execute this 
});
