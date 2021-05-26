class Console {
  constructor(type) {
    this.type = type;
    this.cookies = [];
  }

  log(...userArg) {
    if (typeof userArg === "string") {
      this.cookies.push(userArg);
      return `${this.type}: ${userArg}`;
    }
    if (userArg.length > 1) {
      return userArg.reduce((a, b) => a + b);
    }
    if (typeof userArg === "object") {
      this.cookies.push(JSON.stringify(userArg));
      console.log("typeof str 1:: ", typeof JSON.stringify(userArg));
      return `${this.type}: ${JSON.stringify(userArg)}`;
    }
  }

  history() {
    return this.cookies;
  }

  clearHistory() {
    this.cookies = [];
    return true;
  }
}

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)); //➞ "ok : 1, 2, 3"
console.log(myConsole.clearHistory()); // true
console.log(myConsole.history());
