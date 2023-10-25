import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IResolveAccountData {
    account_number: string;
    bank_code: string;
}
export declare class Misc extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    getListOfBanks(callback?: any): Promise<any>;
    resolveAccount(data: IResolveAccountData, callback?: any): Promise<any>;
    getExchangeRate(currencyPair: string, callback?: any): Promise<any>;
}
export {};
