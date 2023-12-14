# Bloc Node.js Library

<div align="center">
    <svg width="52" height="52" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.35429 0H15.6436C15.8418 0 15.9979 0.160274 15.9979 0.35429V16.0021H0.35429C0.156056 16.0021 0 15.8418 0 15.6478V0.35429C0 0.160274 0.160274 0 0.35429 0Z" fill="#1B1A23"></path>
    <path d="M27.335 11.1559V4.84194C27.335 4.7441 27.2557 4.66479 27.1578 4.66479H20.8439C20.746 4.66479 20.6667 4.7441 20.6667 4.84194V11.1559C20.6667 11.2537 20.746 11.333 20.8439 11.333H27.1578C27.2557 11.333 27.335 11.2537 27.335 11.1559Z" fill="#1B1A23"></path>
    <path d="M13.3325 29.3344V31.6457C13.3325 31.8439 13.1722 32 12.9782 32H0.354531C0.156298 32 0.000239372 31.8397 0.000239372 31.6457V19.022C0.000239372 18.8238 0.160516 18.6677 0.354531 18.6677H2.66585C8.55382 18.6677 13.3325 23.4464 13.3325 29.3344Z" fill="#1B1A23"></path>
    <path d="M32 16.3565V31.6458C32 31.844 31.8397 32.0001 31.6457 32.0001H16.3564C16.1582 32.0001 16.0021 31.8398 16.0021 31.6458V16.0022H31.6457C31.8439 16.0022 32 16.1625 32 16.3565Z" fill="#1B1A23"></path>
    </svg>
</div>

The first [Bloc](https://blochq.io/) API wrapper 🚀🚀🚀
The Bloc-Node library provides convenient access to the Bloc API.

![image](https://hackmd.io/_uploads/BJlI6yFIT.png)

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
