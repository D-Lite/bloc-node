import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface ICardDisputeData {
    transaction_id: string,
    reason: string,
    explanation: string,
    meta_data: {
        payment: string
    }
}

interface IUpdateICardDisputeData {
    reason: string,
    explanation: string,
    meta_data: object
}

interface IDisputeId {
    disputeID: string
}

export class Dispute extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/cards/dispute'
    }

    async createCardDispute(data: ICardDisputeData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async getCardDisputeReasons(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/reasons`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCardDisputes(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCardDispute(disputeID: IDisputeId, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${disputeID}`), callback).catch(err => {
            console.log(err);
        })
    }

    async updateCardDispute(disputeID: IDisputeId, data: IUpdateICardDisputeData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${disputeID}`, data), callback).catch(err => {
            console.log(err);
        })
    }

}
