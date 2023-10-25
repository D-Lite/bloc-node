import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IAccountData {
    amount: number;
    account_id: string;
}
export declare class Simulation extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    creditAccount(data: IAccountData, callback?: any): Promise<any>;
    debitAccount(data: IAccountData, callback?: any): Promise<any>;
}
export {};
