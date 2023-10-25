import { Bloc } from "..";

beforeEach(async () => {
    jest.setTimeout(100000);
})



const blocClient = new Bloc({
    secretKey: "live_sk_lfvdiiigf2303201",
});


describe("Test Checkout API", () => {

    it("creates checkout", async () => {
        const data = {
            customer_email: "jusmepaul8@orchs.xyz",
            customer_name: "Dennis Paul",
            country: "Nigeria",
            amount: 2000
        }

        const response = await blocClient.checkout.createCheckout(data, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true)
    })
   
})