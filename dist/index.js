"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloc = void 0;
const Axios = require('axios');
const Customer_1 = require("./lib/Customer");
const Misc_1 = require("./lib/Misc");
const Account_1 = require("./lib/Account");
const Bill_1 = require("./lib/Bill");
const Wallet_1 = require("./lib/Wallet");
const Card_1 = require("./lib/Card");
const Dispute_1 = require("./lib/Dispute");
const Transfer_1 = require("./lib/Transfer");
const Transaction_1 = require("./lib/Transaction");
const Checkout_1 = require("./lib/Checkout");
const Simulation_1 = require("./lib/Simulation");
const Payment_1 = require("./lib/Payment");
const Beneficiary_1 = require("./lib/Beneficiary");
class Bloc {
    constructor(options) {
        this.apiURL = "https://api.blochq.io/v1";
        const axios = Axios.create({
            baseURL: this.apiURL,
            headers: {
                'accept': "application/json",
                'content-type': "application/json",
                "authorization": `Bearer ${options.secretKey}`
            }
        });
        this.customer = new Customer_1.Customer(axios);
        this.misc = new Misc_1.Misc(axios);
        this.account = new Account_1.Account(axios);
        this.bill = new Bill_1.Bill(axios);
        this.wallet = new Wallet_1.Wallet(axios);
        this.card = new Card_1.Card(axios);
        this.dispute = new Dispute_1.Dispute(axios);
        this.transfer = new Transfer_1.Transfer(axios);
        this.transaction = new Transaction_1.Transaction(axios);
        this.checkout = new Checkout_1.Checkout(axios);
        this.simulation = new Simulation_1.Simulation(axios);
        this.payment = new Payment_1.Payment(axios);
        this.beneficiary = new Beneficiary_1.Beneficiary(axios);
    }
}
exports.Bloc = Bloc;
