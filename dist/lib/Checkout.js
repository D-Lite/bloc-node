"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Checkout extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/checkout';
    }
    async createCheckout(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/new`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Checkout = Checkout;
