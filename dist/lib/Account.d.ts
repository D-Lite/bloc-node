import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ICollectionRulesObject {
    amount: number;
    frequency: number;
}
interface IFixedAccountData {
    customer_id: string;
    preferred_bank?: string;
    alias?: string;
    collection_rules?: ICollectionRulesObject;
}
interface ICollectionAccountData {
    preferred_bank: string;
    alias: string;
    collection_rules: ICollectionRulesObject;
}
interface IAccountID {
    accountID: string;
}
interface ICustomerID {
    customerID: string;
}
interface IAccountUpdateData {
    accountID: string;
    reason: string;
}
export declare class Account extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    getAccounts(callback?: any): Promise<any>;
    createFixedAccount(data: IFixedAccountData, callback?: any): Promise<any>;
    createCollectionAccount(data: ICollectionAccountData, callback?: any): Promise<any>;
    getAccountById(accountID: IAccountID["accountID"], callback?: any): Promise<any>;
    getAccountByAccountNumber(accountNumber: string, callback?: any): Promise<any>;
    getCustomerAccounts(customerID: ICustomerID["customerID"], callback?: any): Promise<any>;
    getOrganisationDefaultAccounts(callback?: any): Promise<any>;
    freezeAccount(data: IAccountUpdateData, callback?: any): Promise<any>;
    unFreezeAccount(data: IAccountUpdateData, callback?: any): Promise<any>;
    closeAccount(data: IAccountUpdateData, callback?: any): Promise<any>;
    reOpenAccount(data: IAccountUpdateData, callback?: any): Promise<any>;
}
export {};
