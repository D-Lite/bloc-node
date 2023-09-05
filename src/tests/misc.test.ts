const { Bloc } = require('../index');

beforeEach(async () => {
    jest.setTimeout(100000);
})



const blocClient = new Bloc({
    secretKey: "live_sk_lfvdiiigf2303201",
});


describe("Test Miscellanous API", () => {

    it("get list of banks", async () => {
        const response = await blocClient.misc.getListOfBanks((err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })

    it("get exchange rate", async () => {
        const response = await blocClient.misc.getExchangeRate('USD-NGN', (err: any, results: any) => {
            if (results) return true;
        });

        expect(response).toHaveProperty("data.success", true)
    })
})