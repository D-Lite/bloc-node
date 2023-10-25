"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Misc = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Misc extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '';
    }
    async getListOfBanks(callback) {
        return this.sendRequest(this.axios.get('/banks'), callback).catch(err => {
            console.log(err);
        });
    }
    async resolveAccount(data, callback) {
        return this.sendRequest(this.axios.get(`/resolve-account?account_number=${data.account_number}&bank_code=${data.bank_code}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getExchangeRate(currencyPair, callback) {
        return this.sendRequest(this.axios.get(`/rates/currencies/${currencyPair}`), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Misc = Misc;
