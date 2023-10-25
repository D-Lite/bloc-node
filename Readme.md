# Bloc Node.js Library

The first [Bloc](https://blochq.io/) API wrapper 🚀🚀🚀
The Bloc-Node library provides convenient access to the Bloc API.

### Installation

For Yarn
```
yarn add blochq-node
```
For NPM
```
npm install blochq-node --save
```

### Usage

```js
// import the module
const { Bloc } = require("blochq-node");

// set the secret key
const blocClient = new Bloc({
    secretKey: "sk_test_xxxxxx",
});

 blocClient.account.getAccounts((err, results) => {
    // Handle errors
    if (err) {
        console.log(err);
    }
    if (results){
        console.log(results);
    };
});
```

### Resources

* Account
* Wallets
* Bills Payment
* Disputes
* Cards
* Checkout
* Customers
* Miscellaneous
* Simulation
* Transactions
* Transfers
* Payment Links
* Beneficiaries
  
### Contributing

* Please do 🧡

### TODO

* [X] Continuously improve the testing scenarios
* [X] Work on Webhook endpoints
* [X] Rework the Readme documentation
