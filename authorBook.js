class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    let emailRexExTester = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRexExTester.test(value)) {
      throw new Error("Invalid email!!!");
    }
    this._email = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "number") {
      throw new Error("Invalid Name!!!");
    }
    this._name = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    if (
      value.toLowerCase() !== "male".toLowerCase() &&
      value.toLowerCase() !== "female".toLowerCase()
    ) {
      throw new Error("Invalid gender");
    }
    this._gender = value.toLowerCase();
  }

  toString() {
    if (this._gender.toLowerCase() === "male".toLowerCase()) {
      return `Mr. ${this._name}`;
    }
    return `Ms. ${this._name}`;
  }
}

// let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
// console.log(author1.gender); // female
// console.log(author1.name); // J. K. Rowling
// console.log(author1.toString()); // Ms. J. K. Rowling
// author1.name = 12; // throws error

class Book extends Author {
  constructor(name, title, price, quantity) {
    super(name);
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw new Error("Invalid Price value!!!");
    }
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("Invalid Quantity value!!!");
    }
    this._quantity = value;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return `Author: ${this._name}, title: ${this._title}, price: ${this._price}`;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

let book1 = new Book(author1, "Harry Potter", 2800, 4);

console.log("toString:: ", book1.toString());
console.log("getProfit:: ", book1.getProfit());
