import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IPaymentLinkData {
    name: string,
    description: string,
    amount: number,
    currency: string
}

interface IPaymentLinkID {
    linkId: string
}

interface IPaymentEdit {
    name: string,
    description: string
}


export class Misc extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/paymentlinks'
    }


    async createPaymentLink(data: IPaymentLinkData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        })
    }

    async getPaymentLinks(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err)
        })
    }

    async getPaymentLinkById(linkId: IPaymentLinkID, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${linkId}`), callback).catch(err => {
            console.log(err)
        })
    }

    async getPaymentLinkByLinkId(linkId: IPaymentLinkID, callback?: any) {
        return this.sendRequest(this.axios.get(`/link/${linkId}`), callback).catch(err => {
            console.log(err)
        })
    }

    //  WIP - Get more info from Bloc Engineers
    // async deletePaymentId(linkId[]: IPaymentLinkID, callback?: any) {
    //     return this.sendRequest(this.axios.delete(`${this.path}`, data), callback).catch(err => {
    //         console.log(err)
    //     })
    // }

    async editPaymentLink(linkId: IPaymentLinkData, data: IPaymentEdit, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${linkId}`, data), callback).catch(err => {
            console.log(err)
        })
    }

}