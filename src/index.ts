const Axios = require('axios');
import { Customer } from "./lib/Customer";
import { Misc } from "./lib/Misc";
import { Account } from "./lib/Account";
import { Bill } from "./lib/Bill";
import { Wallet } from "./lib/Wallet";
import { Card } from "./lib/Card";
import { Dispute } from "./lib/Dispute";
import { Transfer } from "./lib/Transfer";
import { Transaction } from "./lib/Transaction";


export class Bloc {
    public apiURL = "https://api.blochq.io/v1"
    public customer: Customer
    public misc: Misc
    public account: Account
    public bill: Bill
    public wallet: Wallet
    public card: Card
    public dispute: Dispute
    public transfer: Transfer
    public transaction: Transaction

    constructor(options: { secretKey: string }) {
        const axios = Axios.create({
            baseURL: this.apiURL,
            headers: {
                'accept': "application/json",
                'content-type': "application/json",
                "authorization": `Bearer ${options.secretKey}`
            }
        })

        this.customer = new Customer(axios);
        this.misc = new Misc(axios);
        this.account = new Account(axios);
        this.bill = new Bill(axios);
        this.wallet = new Wallet(axios);
        this.card = new Card(axios);
        this.dispute = new Dispute(axios);
        this.transfer = new Transfer(axios);
        this.transaction = new Transaction(axios);
    }
}