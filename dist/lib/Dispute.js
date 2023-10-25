"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispute = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Dispute extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/cards/dispute';
    }
    async createCardDispute(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getCardDisputeReasons(callback) {
        return this.sendRequest(this.axios.get(`${this.path}/reasons`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCardDisputes(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCardDispute(disputeID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${disputeID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async updateCardDispute(disputeID, data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${disputeID}`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Dispute = Dispute;
