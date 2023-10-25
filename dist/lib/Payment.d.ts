import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IPaymentLinkData {
    name: string;
    description: string;
    amount: number;
    currency: string;
}
interface IPaymentLinkID {
    linkId: string;
}
interface IPaymentEdit {
    name: string;
    description: string;
}
export declare class Payment extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createPaymentLink(data: IPaymentLinkData, callback?: any): Promise<any>;
    getPaymentLinks(callback?: any): Promise<any>;
    getPaymentLinkById(linkId: IPaymentLinkID, callback?: any): Promise<any>;
    getPaymentLinkByLinkId(linkId: IPaymentLinkID, callback?: any): Promise<any>;
    editPaymentLink(linkId: IPaymentLinkData, data: IPaymentEdit, callback?: any): Promise<any>;
}
export {};
