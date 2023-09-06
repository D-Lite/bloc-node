import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IAccountData {
    amount: number,
    account_id: string
}

export class Simulation extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/accounts'
    }

    async creditAccount(data: IAccountData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/credit/manual`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async debitAccount(data: IAccountData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/debit/manual`, data), callback).catch(err => {
            console.log(err)
        })
    }

}
