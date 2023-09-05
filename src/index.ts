const Axios = require('axios');

export class Bloc {
    public apiURL = "https://api.blochq.io/v1"

    constructor(options: { secretKey: string }) {
        const axios = Axios.create({
            baseURL: this.apiURL,
            headers: {
                'accept': "application/json",
                'content-type': "application/json",
                "authorizarion": `Bearer ${options.secretKey}`
            }
        })
    }
}