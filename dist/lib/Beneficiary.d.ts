import { AxiosInstance } from "axios";
import { BaseLib } from "../base/BaseIndex";
interface IBeneficiaryData {
    currency: string;
    accountNumber: string;
    bankCode: string;
}
interface IBeneficiaryID {
    id: string;
}
export declare class Beneficiary extends BaseLib {
    protected readonly axios: AxiosInstance;
    protected readonly path: string;
    constructor(axios: AxiosInstance);
    createBeneficiary(data: IBeneficiaryData, callback?: any): Promise<any>;
    getBeneficiaryById(id: IBeneficiaryID, callback?: any): Promise<any>;
    deleteBeneficiary(id: IBeneficiaryID, callback?: any): Promise<any>;
    updateBeneficiary(id: IBeneficiaryID, bankCode: string, callback?: any): Promise<any>;
}
export {};
