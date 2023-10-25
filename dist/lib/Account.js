"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Account extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/accounts';
    }
    async getAccounts(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async createFixedAccount(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async createCollectionAccount(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/collections`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getAccountById(accountID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${accountID}`), callback).catch(err => {
            // console.log(err);
        });
    }
    async getAccountByAccountNumber(accountNumber, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/number/${accountNumber}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomerAccounts(customerID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/customers/accounts/${customerID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getOrganisationDefaultAccounts(callback) {
        return this.sendRequest(this.axios.get(`${this.path}/organization/default`), callback).catch(err => {
            console.log(err);
        });
    }
    async freezeAccount(data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/freeze`, data.reason), callback).catch(err => {
            // console.log(err)
        });
    }
    async unFreezeAccount(data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/unfreeze`, data.reason), callback).catch(err => {
            // console.log(err)
        });
    }
    async closeAccount(data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/close`, data.reason), callback).catch(err => {
            console.log(err);
        });
    }
    async reOpenAccount(data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/${data.accountID}/reopen`, data.reason), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Account = Account;
