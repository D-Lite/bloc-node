const Axios = require('axios');
import { Customer } from "./lib/Customer";


export class Bloc {
    public apiURL = "https://api.blochq.io/v1"
    public customer: Customer

    constructor(options: { secretKey: string }) {
        const axios = Axios.create({
            baseURL: this.apiURL,
            headers: {
                'accept': "application/json",
                'content-type': "application/json",
                "authorization": `Bearer ${options.secretKey}`
            }
        })

        this.customer = new Customer(axios);
    }
}