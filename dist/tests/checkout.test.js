"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
beforeEach(async () => {
    jest.setTimeout(100000);
});
const blocClient = new __1.Bloc({
    // secretKey: "live_sk_lfvdiiigf2303201",
});
describe("Test Checkout API", () => {
    it("creates checkout", async () => {
        const data = {
            customer_email: "jusmepaul8@orchs.xyz",
            customer_name: "Dennis Paul",
            country: "Nigeria",
            amount: 2000
        };
        const response = await blocClient.checkout.createCheckout(data, (err, results) => {
            if (results)
                return true;
        });
        expect(response).toHaveProperty("data.success", true);
    });
});
