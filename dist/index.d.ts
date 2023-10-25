import { Customer } from "./lib/Customer";
import { Misc } from "./lib/Misc";
import { Account } from "./lib/Account";
import { Bill } from "./lib/Bill";
import { Wallet } from "./lib/Wallet";
import { Card } from "./lib/Card";
import { Dispute } from "./lib/Dispute";
import { Transfer } from "./lib/Transfer";
import { Transaction } from "./lib/Transaction";
import { Checkout } from "./lib/Checkout";
import { Simulation } from "./lib/Simulation";
import { Payment } from "./lib/Payment";
import { Beneficiary } from "./lib/Beneficiary";
export declare class Bloc {
    apiURL: string;
    customer: Customer;
    misc: Misc;
    account: Account;
    bill: Bill;
    wallet: Wallet;
    card: Card;
    dispute: Dispute;
    transfer: Transfer;
    transaction: Transaction;
    checkout: Checkout;
    simulation: Simulation;
    payment: Payment;
    beneficiary: Beneficiary;
    constructor(options: {
        secretKey: string;
    });
}
