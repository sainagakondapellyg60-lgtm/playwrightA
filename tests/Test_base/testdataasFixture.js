const  base  = require('@playwright/test')

exports.customtest=base.test.extend(
    {
        testDataforPlan: {
            OriginCity: "France",
            DestinationCity: "New York"

        }
    }
)
