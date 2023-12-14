# Bloc Node.js Library

The first [Bloc](https://blochq.io/) API wrapper 🚀🚀🚀
The Bloc-Node library provides convenient access to the Bloc API.

![block-banner](https://github.com/canhamzacode/bloc-node/assets/103611443/0b707062-d1d8-45f2-af58-cf4b77ac627d)


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
  if (results) {
    console.log(results);
  }
});
```

### Resources

- Account
- Wallets
- Bills Payment
- Disputes
- Cards
- Checkout
- Customers
- Miscellaneous
- Simulation
- Transactions
- Transfers
- Payment Links
- Beneficiaries

### Contributing

Follow this simple step to get started.

1. Fork the repository.
2. clone the forked repositery to your local environment.
   ```bash
   git clone https://github.com/D-Lite/bloc-node
   ```
3. Navigate to the Project Directory :
   ```bash
       cd bloc-node
   ```
4. Install dependencies :
   ```bash
       npm install
   ```
5. Create a branch
   ```bash
       git checkout -b branch-name
   ```
6. Make changes your desired changes.
7. Add your changes and commit
   ```bash
       git add .
       git commit -m"your commit message"
   ```
8. Push your changes
   ```bash
       git push -u origin branch-nae
   ```
9. Submit a pull request:
   Go to your forked repository on GitHub and create a pull request. This is a formal request to merge your changes into the main codebase. Be sure to provide a clear and informative description of your changes in the pull request description.

**Dont forget to Star the repo 🧡**

### Project Admin

Twitter(X) - [Daniel Olabemiwo](https://twitter.com/danielolabemiwo)
Github - [Daniel Olabemiwo](https://github.com/D-Lite)
Linkedin - [Daniel Olabemiwo](https://www.linkedin.com/in/d-lite/)
