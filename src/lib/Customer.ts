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

interface ICustomerId {
    customerID: string
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

    async getCustomers(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCustomerById(customerID: ICustomerId, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${customerID}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getMeansOfIdentification(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/means/identity`), callback).catch(err => {
            // console.log(err)
        })
    }

    async revalidateCustomerKYC(customerID: ICustomerId, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/kyc/revalidate/${customerID}`), callback).catch(err => {
            console.log(err)
        })
    }

}