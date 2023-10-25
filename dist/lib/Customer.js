"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Customer extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/customers';
    }
    async createCustomer(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomers(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomerById(customerID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${customerID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getMeansOfIdentification(callback) {
        return this.sendRequest(this.axios.get(`${this.path}/means/identity`), callback).catch(err => {
            // console.log(err)
        });
    }
    async revalidateCustomerKYC(customerID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/kyc/revalidate/${customerID}`), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Customer = Customer;
