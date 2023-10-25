import { AxiosInstance, AxiosError } from "axios";
import { BaseLib } from "../base/BaseIndex";

interface ICardId {
    cardID: string
}

interface IIssueCardData {
    customer_id: string,
    brand: string
}

interface ICustomerID {
    customerID: string
}

interface ICardPin {
    old_pin: string,
    new_pin: string,
}

interface IBlockCardData {
    account_id: string,
    reason: string
}

interface ILinkCard {
    card_id: string,
    account_id: string
}

interface IFundCard {
    amount: number,
    from_account_id: string,
    currency: string
}

interface IWithdrawCard {
    amount: number,
    to_account_id: string,
    currency: string
}


export class Card extends BaseLib {
    protected readonly path: string;

    constructor(protected readonly axios: AxiosInstance) {
        super(axios);
        this.path = '/cards'
    }


    async getCards(callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}`), callback).catch(err => {
            console.log(err);
        })
    }

    async getCardsById(cardID: ICardId["cardID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/${cardID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async issueCard(data: IIssueCardData, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async getCustomerCards(customerID: ICustomerID, callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/customer/${customerID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async getCardSecureData(cardID: ICardId["cardID"], callback?: any) {
        return this.sendRequest(this.axios.get(`${this.path}/secure-data/${cardID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async changeCardPin(cardID: ICardId["cardID"], data: ICardPin, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/change-pin/${cardID}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async freezeCard(cardID: ICardId["cardID"], callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/freeze/${cardID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async unFreezeCard(cardID: ICardId["cardID"], callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/unfreeze/${cardID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async blockCard(id: ICardId["cardID"], data: IBlockCardData, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/block/${id}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async linkCardWithFixedAccount(data: ILinkCard, callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/fixed-account/link`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async unlinkCardFromFixedAccount(cardID: ICardId["cardID"], callback?: any) {
        return this.sendRequest(this.axios.put(`${this.path}/fixed-account/unlink/${cardID}`), callback).catch(err => {
            console.log(err)
        })
    }

    async fundCard(cardID: ICardId["cardID"], data: IFundCard, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/fund/${cardID}`, data), callback).catch(err => {
            console.log(err)
        })
    }

    async withdrawFromCard(cardID: ICardId["cardID"], data: IWithdrawCard, callback?: any) {
        return this.sendRequest(this.axios.post(`${this.path}/withdraw/${cardID}`, data), callback).catch(err => {
            console.log(err)
        })
    }


}