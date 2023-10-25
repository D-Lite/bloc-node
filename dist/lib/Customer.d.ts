import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ICustomer {
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
    customer_type: string;
    bvn: string;
}
interface ICustomerId {
    customerID: string;
}
export declare class Customer extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createCustomer(data: ICustomer, callback?: any): Promise<any>;
    getCustomers(callback?: any): Promise<any>;
    getCustomerById(customerID: ICustomerId, callback?: any): Promise<any>;
    getMeansOfIdentification(callback?: any): Promise<any>;
    revalidateCustomerKYC(customerID: ICustomerId, callback?: any): Promise<any>;
}
export {};
