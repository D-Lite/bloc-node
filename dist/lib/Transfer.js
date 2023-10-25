"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Transfer extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/transfers';
    }
    async transferFromAFixedAccount(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async transferFromOrganizationBalance(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/balance`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async internalTransfer(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/internal`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async bulkTransfer(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/bulk`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Transfer = Transfer;
