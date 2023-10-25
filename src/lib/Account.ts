import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface ICollectionRulesObject {
    amount: number,
    frequency: number
}

interface IFixedAccountData {
    customer_id: string,
    preferred_bank?: string,
    alias?: string,
    collection_rules?: ICollectionRulesObject
}

interface ICollectionAccountData {
    preferred_bank: string,
    alias: string,
    collection_rules: ICollectionRulesObject
}

interface IAccountID {
    accountID: string
}

interface ICustomerID {
    customerID: string
}

interface IAccountUpdateData {
    accountID: string,
    reason: string
}

export class Account extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/accounts'
    }


    async getAccounts(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        })
    }

    async createFixedAccount(data: IFixedAccountData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async createCollectionAccount(data: ICollectionAccountData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/collections`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async getAccountById(accountID: IAccountID["accountID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${accountID}`), callback).catch(err => {
            // console.log(err);
        })
    }

    async getAccountByAccountNumber(accountNumber: string, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/number/${accountNumber}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCustomerAccounts(customerID: ICustomerID["customerID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/customers/accounts/${customerID}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getOrganisationDefaultAccounts(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/organization/default`), callback).catch(err => {
            console.log(err);
        })
    }

    async freezeAccount(data: IAccountUpdateData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/freeze`, data.reason), callback).catch(err => {
            // console.log(err)
        })
    }

    async unFreezeAccount(data: IAccountUpdateData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/unfreeze`, data.reason), callback).catch(err => {
            // console.log(err)
        })
    }

    async closeAccount(data: IAccountUpdateData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/close`, data.reason), callback).catch(err => {
            console.log(err)
        })
    }

    async reOpenAccount(data: IAccountUpdateData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/reopen`, data.reason), callback).catch(err => {
            console.log(err)
        })
    }
}
