import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ICardId {
    cardID: string;
}
interface IIssueCardData {
    customer_id: string;
    brand: string;
}
interface ICustomerID {
    customerID: string;
}
interface ICardPin {
    old_pin: string;
    new_pin: string;
}
interface IBlockCardData {
    account_id: string;
    reason: string;
}
interface ILinkCard {
    card_id: string;
    account_id: string;
}
interface IFundCard {
    amount: number;
    from_account_id: string;
    currency: string;
}
interface IWithdrawCard {
    amount: number;
    to_account_id: string;
    currency: string;
}
export declare class Card extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    getCards(callback?: any): Promise<any>;
    getCardsById(cardID: ICardId["cardID"], callback?: any): Promise<any>;
    issueCard(data: IIssueCardData, callback?: any): Promise<any>;
    getCustomerCards(customerID: ICustomerID, callback?: any): Promise<any>;
    getCardSecureData(cardID: ICardId["cardID"], callback?: any): Promise<any>;
    changeCardPin(cardID: ICardId["cardID"], data: ICardPin, callback?: any): Promise<any>;
    freezeCard(cardID: ICardId["cardID"], callback?: any): Promise<any>;
    unFreezeCard(cardID: ICardId["cardID"], callback?: any): Promise<any>;
    blockCard(id: ICardId["cardID"], data: IBlockCardData, callback?: any): Promise<any>;
    linkCardWithFixedAccount(data: ILinkCard, callback?: any): Promise<any>;
    unlinkCardFromFixedAccount(cardID: ICardId["cardID"], callback?: any): Promise<any>;
    fundCard(cardID: ICardId["cardID"], data: IFundCard, callback?: any): Promise<any>;
    withdrawFromCard(cardID: ICardId["cardID"], data: IWithdrawCard, callback?: any): Promise<any>;
}
export {};
