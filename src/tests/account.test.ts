const { Bloc } = require('../index');

beforeEach(async () => {
    jest.setTimeout(100000);
})



const blocClient = new Bloc({
    secretKey: "live_sk_lfvdiiigf2303201",
});


describe("Test Accounts API", () => {

    it("get list of accounts", async () => {
        const response = await blocClient.account.getAccounts((err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("creates fixed account", async () => {
        const data = {
            "customer_id": "64c9e81497880d4b259cec77",
            "preferred_bank": "Banc Corp",
            "alias": "business",
            "collection_rules": {
                "amount": 30000,
                "frequency": 2
            }
        }
        const response = await blocClient.account.createFixedAccount(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("creates collection account", async () => {
        // const data = {
        //     "preferred_bank": "Providus",
        //     "alias": "Business",
        //     "collection_rules": {
        //         "amount": 30000,
        //         "frequency": 2
        //     }
        // }

        // const response = await blocClient.account.createCollectionAccount(data, (err: any, results: any) => {
        //     if (results) return true;
        // });
        // expect(response).toHaveProperty("data.success", true)
    })

    it("gets account by ID", async () => {
        const data = "64f7bcba5f68b9f2b72458e3"

        const response = await blocClient.account.getAccountById(data, (err: any, results: any) => {
            if (results) return true;
        });
        // console.log(response)
        expect(response).toBeTruthy()

    })

    it("gets account by account number", async () => {
        const data = "2060364129"

        const response = await blocClient.account.getAccountByAccountNumber(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("gets customer accounts", async () => {
        const data = "64c9e81497880d4b259cec77"

        const response = await blocClient.account.getCustomerAccounts(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("gets customer accounts", async () => {
        const response = await blocClient.account.getOrganisationDefaultAccounts((err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("freezes account", async () => {
        const data = {
            "accountID": "64f7bcba5f68b9f2b72458e3",
            "reason": "bad kyc details"
        }

        const response = await blocClient.account.freezeAccount(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response.data.success).toBeTruthy()
    })

    it("unfreezes account", async () => {
        const data = {
            "accountID": "64f7bcba5f68b9f2b72458e3",
            "reason": "has upgraded kyc tier"
        }

        const response = await blocClient.account.unFreezeAccount(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response.data.success).toBeTruthy()
    })

    it("closes account", async () => {
        const data = {
            "accountID": "64f7bcba5f68b9f2b72458e3",
            "reason": "bad banking service"
        }

        const response = await blocClient.account.closeAccount(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response.data.success).toBeTruthy()
    })

    it("reopen account", async () => {
        const data = {
            "accountID": "64f7bcba5f68b9f2b72458e3",
            "reason": "issue looked into and settled"
        }

        const response = await blocClient.account.reOpenAccount(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response.data.success).toBeTruthy()
    })
})