class Account {
  constructor(name = "", balance = 0, id = Math.floor(Math.random() * 100)) {
    this._name = name;
    this._id = id;
    this._balance = balance;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "number") {
      throw new Error("Invalid name value");
    }
    this._name = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value !== "number") {
      throw new Error("Invalid balance value");
    }
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount > this._balance) {
      return `Amount exceeded balance.`;
    }
    this._balance -= amount;
  }

  transferTo(anotherAccount, amount) {
    if (amount > this._balance) {
      return `Amount exceeded balance.`;
    }
    anotherAccount._balance += amount;
    this._balance -= amount;
    return this._balance;
  }

  toString() {
    return `${this._name}'s account balance is ${this._balance}`;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst._id === accountSecond._id) {
      return true;
    }
    return false;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600  -> Amount exceeded balance.
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.
