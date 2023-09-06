import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface ITransferData {
    amount: number,
    bank_code: string,
    account_number: string,
    narration: string,
    from_account_id: string,
    reference: string
}

interface IInternalTransferData {
    amount: number,
    bank_code: string,
    account_number: string,
    narration: string,
    from_account_id: string,
    to_account_id: string,
    reference: string
}

interface IBulkTransfer {
    account_id: string,
    bulk_list: IInternalTransferData
}

export class Transfer extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/transfers'
    }

    async transferFromAFixedAccount(data: ITransferData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async transferFromOrganizationBalance(data: ITransferData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/balance`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async internalTransfer(data: IInternalTransferData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/internal`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async bulkTransfer(data: IBulkTransfer, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/bulk`, data), callback).catch(err => {
            console.log(err)
        })
    }
}
