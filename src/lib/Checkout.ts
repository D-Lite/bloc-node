import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface ICheckoutData {
    customer_email: string,
    customer_name: string,
    country: string,
    amount: number
}

export class Checkout extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/checkout'
    }

    async createCheckout(data: ICheckoutData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/new`, data), callback).catch(err => {
            console.log(err)
        })
    }
}
