const { Bloc } = require('../index');

beforeEach(async () => {
    jest.setTimeout(100000);
})



const blocClient = new Bloc({
    secretKey: "live_sk_lfvdiiigf2303201",
});


describe("Testing create new customer API", () => {
    it("creates a new customer", async () => {

        const createdata = {
            email: 'bloctesaapi@abc.xyz',
            phone_number: '0810121121',
            first_name: 'Jides',
            last_name: 'Hassana',
            customer_type: 'personal',
            bvn: '00000001001'
        }

        const response = await blocClient.customer.createCustomer(createdata, (err: any, results: any) => {
            if (results) return true;
        });
        expect(response).toHaveProperty("data.success", true);
    })
})