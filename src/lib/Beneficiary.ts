import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IBeneficiaryData {
    currency: string,
    accountNumber: string,
    bankCode: string
}

interface IBeneficiaryID {
    id: string
}


export class Beneficiary extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/beneficiaries'
    }


    async createBeneficiary(data: IBeneficiaryData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        })
    }

    async getBeneficiaryById(id: IBeneficiaryID, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${id}`), callback).catch(err => {
            console.log(err)
        })
    }

    async deleteBeneficiary(id: IBeneficiaryID, callback?: any) {
        return this.sendRequest(this.axios.delete(`${this.path}/${id}`), callback).catch(err => {
            console.log(err)
        })
    }

    async updateBeneficiary(id: IBeneficiaryID, bankCode: string, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/${id}`, bankCode), callback).catch(err => {
            console.log(err)
        })
    }

}