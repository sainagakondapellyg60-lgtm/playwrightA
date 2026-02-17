import  {test as baseTest} from '@playwright/test';

interface TestDataforPlan{
    OriginCity:string,
    DestinationCity:string
};
export const customtest=baseTest.extend<{testDataforPlan:TestDataforPlan}  >({
        testDataforPlan: {
            OriginCity: "France",
            DestinationCity: "New York"

        }
    }
)
