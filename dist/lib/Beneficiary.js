"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beneficiary = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Beneficiary extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/beneficiaries';
    }
    async createBeneficiary(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getBeneficiaryById(id, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${id}`), callback).catch(err => {
            console.log(err);
        });
    }
    async deleteBeneficiary(id, callback) {
        return this.sendRequest(this.axios.delete(`${this.path}/${id}`), callback).catch(err => {
            console.log(err);
        });
    }
    async updateBeneficiary(id, bankCode, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${id}`, bankCode), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Beneficiary = Beneficiary;
