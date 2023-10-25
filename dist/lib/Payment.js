"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Payment extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/paymentlinks';
    }
    async createPaymentLink(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getPaymentLinks(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getPaymentLinkById(linkId, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${linkId}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getPaymentLinkByLinkId(linkId, callback) {
        return this.sendRequest(this.axios.get(`/link/${linkId}`), callback).catch(err => {
            console.log(err);
        });
    }
    //  WIP - Get more info from Bloc Engineers
    // async deletePaymentId(linkId[]: IPaymentLinkID, callback?: any) {
    //     return this.sendRequest(this.axios.delete(`${this.path}`, data), callback).catch(err => {
    //         console.log(err)
    //     })
    // }
    async editPaymentLink(linkId, data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${linkId}`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Payment = Payment;
