"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulation = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Simulation extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/accounts';
    }
    async creditAccount(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/credit/manual`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async debitAccount(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/debit/manual`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Simulation = Simulation;
