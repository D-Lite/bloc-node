"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Wallet extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/wallets';
    }
    async createWallet(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getWallets(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getWalletById(walletID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${walletID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomerWallets(customerID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/customers/${customerID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async debitWallet(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/debit/manual`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Wallet = Wallet;
