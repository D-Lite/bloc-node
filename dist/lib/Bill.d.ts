import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IBill {
    bill: string;
}
interface IOperatorID {
    operatorID: string;
}
interface ICustomerDVData {
    meter_type: string;
    bill: IBill["bill"];
    device_number: string;
}
interface IDeviceDetail {
    meter_type: string;
    device_number: string;
    beneficiary_msisdn: string;
}
interface IPaymentData {
    amount: number;
    product_id: string;
    operator_id: IOperatorID["operatorID"];
    account_id?: string;
    device_details: IDeviceDetail;
    meta_data: object;
}
export declare class Bill extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    getSupportedBills(callback?: any): Promise<any>;
    getSupportedOperators(bill: IBill["bill"], callback?: any): Promise<any>;
    getOperatorProducts(operatorID: IOperatorID["operatorID"], bill: IBill["bill"], callback?: any): Promise<any>;
    getCustomerDeviceValidation(operatorID: IOperatorID["operatorID"], data: ICustomerDVData, callback?: any): Promise<any>;
    makePayment(bill: IBill["bill"], data: IPaymentData, callback?: any): Promise<any>;
}
export {};
