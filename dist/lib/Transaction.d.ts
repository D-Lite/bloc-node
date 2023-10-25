import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IReferennce {
    reference: string;
}
export declare class Transaction extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    getAllTransaction(callback?: any): Promise<any>;
    getTransactionByReference(reference: IReferennce, callback?: any): Promise<any>;
}
export {};
