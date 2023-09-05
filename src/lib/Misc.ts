import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IResolveAccountData {
    account_number: string,
    bank_code: string
}

interface ICurrencyPair {
    currencyPair: string
}

export class Misc extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = ''
    }


    async getListOfBanks(callback?: any) {
        return this.sendRequest(this.axios.get('/banks'), callback).catch(err => {
            console.log(err);
        })
    }

    async resolveAccount(data: IResolveAccountData, callback?: any) {
        return this.sendRequest(this.axios.get(`/resolve-account?account_number=${data.account_number}&bank_code=${data.bank_code}`), callback).catch(err => {
            console.log(err)
        })
    }

    async getExchangeRate(currencyPair: ICurrencyPair, callback?: any) {
        return this.sendRequest(this.axios.get(`/rates/currencies/${currencyPair}`), callback).catch(err => {
            console.log(err)
        })
    }

}