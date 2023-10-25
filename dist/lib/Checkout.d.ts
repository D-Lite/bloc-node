import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ICheckoutData {
    customer_email: string;
    customer_name: string;
    country: string;
    amount: number;
}
export declare class Checkout extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createCheckout(data: ICheckoutData, callback?: any): Promise<any>;
}
export {};
