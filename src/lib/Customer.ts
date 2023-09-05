import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";


interface ICustomer {
    email: string,
    phone_number: string,
    first_name: string,
    last_name: string,
    customer_type: string,
    bvn: string
}

export class Customer extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/customers'
    }

    async createCustomer(data: ICustomer, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }
}