"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Bill extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/bills';
    }
    async getSupportedBills(callback) {
        return this.sendRequest(this.axios.get(`${this.path}/supported`), callback).catch(err => {
            console.log(err);
        });
    }
    async getSupportedOperators(bill, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/operators?bill=${bill}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getOperatorProducts(operatorID, bill, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/operators/${operatorID}/products?bill=${bill}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomerDeviceValidation(operatorID, data, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/customer/validate/${operatorID}?meter_type=${data.meter_type}&bill=${data.bill}&device_number=${data.device_number}`), callback).catch(err => {
            console.log(err);
        });
    }
    async makePayment(bill, data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/payment?bill=${bill}`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Bill = Bill;
