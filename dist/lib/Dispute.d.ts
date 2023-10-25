import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ICardDisputeData {
    transaction_id: string;
    reason: string;
    explanation: string;
    meta_data: {
        payment: string;
    };
}
interface IUpdateICardDisputeData {
    reason: string;
    explanation: string;
    meta_data: object;
}
interface IDisputeId {
    disputeID: string;
}
export declare class Dispute extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createCardDispute(data: ICardDisputeData, callback?: any): Promise<any>;
    getCardDisputeReasons(callback?: any): Promise<any>;
    getCardDisputes(callback?: any): Promise<any>;
    getCardDispute(disputeID: IDisputeId, callback?: any): Promise<any>;
    updateCardDispute(disputeID: IDisputeId, data: IUpdateICardDisputeData, callback?: any): Promise<any>;
}
export {};
