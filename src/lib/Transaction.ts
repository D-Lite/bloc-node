import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IReferennce {
    reference: string
}

export class Transaction extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/transactions'
    }

    async getAllTransaction(callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`), callback).catch(err => {
            console.log(err)
        })
    }

    async getTransactionByReference(reference: IReferennce, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/reference/${reference}`), callback).catch(err => {
            console.log(err)
        })
    }
}
