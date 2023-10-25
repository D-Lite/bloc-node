import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface ITransferData {
    amount: number;
    bank_code: string;
    account_number: string;
    narration: string;
    from_account_id: string;
    reference: string;
}
interface IInternalTransferData {
    amount: number;
    bank_code: string;
    account_number: string;
    narration: string;
    from_account_id: string;
    to_account_id: string;
    reference: string;
}
interface IBulkTransfer {
    account_id: string;
    bulk_list: IInternalTransferData;
}
export declare class Transfer extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    transferFromAFixedAccount(data: ITransferData, callback?: any): Promise<any>;
    transferFromOrganizationBalance(data: ITransferData, callback?: any): Promise<any>;
    internalTransfer(data: IInternalTransferData, callback?: any): Promise<any>;
    bulkTransfer(data: IBulkTransfer, callback?: any): Promise<any>;
}
export {};
