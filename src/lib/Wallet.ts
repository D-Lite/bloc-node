import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IWalletData {
    customer_id: string,
    preferred_bank: string,
    alias: string
}

interface IWalledId {
    walletID: string
}

interface ICustomerID {
    customerID: string
}

interface IWalletDebit {
    walletID: string,
    amount: number
}

export class Wallet extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/wallets'
    }

    async createWallet(data: IWalletData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async getWallets(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getWalletById(walletID: IWalledId["walletID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${walletID}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCustomerWallets(customerID: ICustomerID["customerID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/customers/${customerID}`), callback).catch(err => {
            console.log(err);
        })
    }

    async debitWallet(data: IWalletDebit, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/debit/manual`, data), callback).catch(err => {
            console.log(err)
        })
    }
}
