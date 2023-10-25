import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface IBill {
    bill: string
}

interface IOperatorID {
    operatorID: string
}

interface ICustomerDVData {
    meter_type: string,
    bill: IBill["bill"],
    device_number: string
}

interface IDeviceDetail {
    meter_type: string,
    device_number: string,
    beneficiary_msisdn: string
}

interface IPaymentData {
    amount: number,
    product_id: string,
    operator_id: IOperatorID["operatorID"],
    account_id?: string,
    device_details: IDeviceDetail,
    meta_data: object
}

export class Bill extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/bills'
    }


    async getSupportedBills(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/supported`), callback).catch(err => {
            console.log(err);
        })
    }

    async getSupportedOperators(bill: IBill["bill"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/operators?bill=${bill}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getOperatorProducts(operatorID: IOperatorID["operatorID"], bill: IBill["bill"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/operators/${operatorID}/products?bill=${bill}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCustomerDeviceValidation(operatorID: IOperatorID["operatorID"], data: ICustomerDVData, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/customer/validate/${operatorID}?meter_type=${data.meter_type}&bill=${data.bill}&device_number=${data.device_number}`), callback).catch(err => {
            console.log(err);
        })
    }

    async makePayment(bill: IBill["bill"], data: IPaymentData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/payment?bill=${bill}`, data), callback).catch(err => {
            console.log(err)
        })
    }
}
