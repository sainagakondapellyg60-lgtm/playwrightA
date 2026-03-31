import { test as base } from './baseTest';
import { alertsPage, DynamicID, clientSideDelayPage, HomepagePlayground,formFieldsPage } from 'pageobjects_uiPlayground';

export type PageObjectFixtures = {
    homepage: HomepagePlayground;
    alerts: alertsPage;
    dynamicId: DynamicID;
    clientsidedelay: clientSideDelayPage;
    formfield: formFieldsPage;
};

export type Pages = PageObjectFixtures;

export const test = base.extend<PageObjectFixtures & { pages: Pages }>({

    homepage: async ({ page, actions }, use) => {
        await use(new HomepagePlayground(page, actions));
    },

    //
    alerts: async ({ page, actions, dialog }, use) => {
        await use(new alertsPage(page, actions, dialog));
    },

    dynamicId: async ({ page, actions }, use) => {
        await use(new DynamicID(page, actions));
    },

    clientsidedelay: async ({ page, actions }, use) => {
        await use(new clientSideDelayPage(page, actions));
    },
    formfield: async ({ page, actions }, use) => {
        await use(new formFieldsPage(page, actions));
    },
    pages: async ({ homepage, alerts, dynamicId, clientsidedelay,formfield }, use) => {
        await use({ homepage, alerts, dynamicId, clientsidedelay, formfield });
    }
});

export { expect } from './baseTest';
export type { BaseFixtures } from './baseTest';
