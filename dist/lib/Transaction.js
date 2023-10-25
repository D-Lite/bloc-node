"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Transaction extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/transactions';
    }
    async getAllTransaction(callback) {
        return this.sendRequest(this.axios.post(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getTransactionByReference(reference, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/reference/${reference}`), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Transaction = Transaction;
