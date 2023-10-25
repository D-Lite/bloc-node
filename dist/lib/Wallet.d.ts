import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IWalletData {
    customer_id: string;
    preferred_bank: string;
    alias: string;
}
interface IWalledId {
    walletID: string;
}
interface ICustomerID {
    customerID: string;
}
interface IWalletDebit {
    walletID: string;
    amount: number;
}
export declare class Wallet extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createWallet(data: IWalletData, callback?: any): Promise<any>;
    getWallets(callback?: any): Promise<any>;
    getWalletById(walletID: IWalledId["walletID"], callback?: any): Promise<any>;
    getCustomerWallets(customerID: ICustomerID["customerID"], callback?: any): Promise<any>;
    debitWallet(data: IWalletDebit, callback?: any): Promise<any>;
}
export {};
