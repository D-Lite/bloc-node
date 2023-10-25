"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const BaseIndex_1 = require("../base/BaseIndex");
class Card extends BaseIndex_1.BaseLib {
    constructor(axios) {
        super(axios);
        this.axios = axios;
        this.path = '/cards';
    }
    async getCards(callback) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCardsById(cardID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/${cardID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async issueCard(data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async getCustomerCards(customerID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/customer/${customerID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async getCardSecureData(cardID, callback) {
        return this.sendRequest(this.axios.get(`${this.path}/secure-data/${cardID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async changeCardPin(cardID, data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/change-pin/${cardID}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async freezeCard(cardID, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/freeze/${cardID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async unFreezeCard(cardID, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/unfreeze/${cardID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async blockCard(id, data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/block/${id}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async linkCardWithFixedAccount(data, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/fixed-account/link`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async unlinkCardFromFixedAccount(cardID, callback) {
        return this.sendRequest(this.axios.put(`${this.path}/fixed-account/unlink/${cardID}`), callback).catch(err => {
            console.log(err);
        });
    }
    async fundCard(cardID, data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/fund/${cardID}`, data), callback).catch(err => {
            console.log(err);
        });
    }
    async withdrawFromCard(cardID, data, callback) {
        return this.sendRequest(this.axios.post(`${this.path}/withdraw/${cardID}`, data), callback).catch(err => {
            console.log(err);
        });
    }
}
exports.Card = Card;
