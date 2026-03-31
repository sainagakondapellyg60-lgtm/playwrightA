// baseTest.ts
import { test as base, TestInfo } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { dialogHandler ,createTestLogger, type TestLogger ,UIActions} from 'utility';

export * from '@playwright/test';

export type BaseFixtures = {
    testTitle: string;
    log: TestLogger;
    actions: UIActions;
    dialog: dialogHandler; 
};

export const test = base.extend<BaseFixtures>({

    // Extract + clean title + tagging
    testTitle: [async ({}, use, testInfo: TestInfo) => {

        const originalTitle = testInfo.title;
        const tags: string[] = originalTitle.match(/@[\w-]+/g) || [];
        const cleanTitle = originalTitle.replace(/@[\w-]+/g, '').trim();
        testInfo.title = cleanTitle;

        let featureSet = false;
        let storySet = false;

        tags.forEach(tag => {
            const value = tag.replace('@', '');

            if (value === 'ui') {
                allure.label('parentSuite', 'UI');
                
            } else if (value === 'api') {
                allure.label('parentSuite', 'API');
               
            } else if (!featureSet && ['DM', 'SBP', 'BTU'].includes(value)) {
                allure.label('feature', value.toUpperCase());
                featureSet = true;
            } else if (!storySet && ['button', 'checkbox', 'date', 'dropdown', 'modal', 'alert', 'ID'].includes(value)) {
                allure.label('story', value.toUpperCase());
                storySet = true;
            }
        });

        allure.label('owner', 'Sai');

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

        await use(cleanTitle);
    }, { auto: true }],
    log: async ({ testTitle }, use) => {
        await use(createTestLogger(testTitle));
    },

    // Inject UIActions (fixture-driven)
    actions: async ({ page, log }, use) => {
        await use(new UIActions(page, log));
    },
    dialog: async ({ page }, use) => {
    await use(new dialogHandler(page));
},
});
