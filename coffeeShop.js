class CoffeeShop {
  constructor(name, menu = [], orders = []) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(orderName) {
    for (const i of this.menu) {
      if (orderName.toLowerCase() === i.itemName.toLowerCase()) {
        this.orders.push(i);
        return console.log(`Order added!`);
      } else {
        continue;
      }
    }
    return console.log(`This item is currently unavailable!`);
  }

  listOrder() {
    return this.orders.map((el) => el.itemName);
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      return `All orders have been fulfilled!`;
    }
    let finOrder = this.orders.shift();
    return `The ${finOrder.itemName} is ready`;
  }

  dueAmount() {
    if (this.orders.length === 0) return 0.0;
    return this.orders.reduce((acc = 0, el) => acc.price + el.price);
  }

  cheapestItem() {
    return this.menu.reduce((acc, el) => {
      if (acc.price > el.price) {
        acc = el.itemName;
      }
      return acc;
    });
  }

  drinksOnly() {
    let drinks = [];
    this.menu.map((el) => {
      if (el.type === "drinks") {
        drinks.push(el.itemName);
      }
    });
    return drinks;
  }

  foodOnly() {
    let food = [];
    this.menu.map((el) => {
      if (el.type === "food") {
        food.push(el.itemName);
      }
    });
    return food;
  }
}

let asd = new CoffeeShop("Starbucks", [
  { itemName: "americano", type: "drinks", price: 1100 },
  { itemName: "Espresso", type: "drinks", price: 1300 },
  { itemName: "Fries", type: "food", price: 800 },
  { itemName: "quattro formaggi", type: "food", price: 2800 },
]);

//console.log("asd:: ", asd);
//console.log("name:: ", asd.name);
//console.log("menu:: ", asd.menu[0].itemName);
asd.addOrder("americano");
asd.addOrder("espresso");
//console.log("order:: ", asd.listOrder());
console.log("order list:: ", asd.orders);
console.log("Cost:: ", asd.dueAmount());
// console.log("Cheapest:: ", asd.cheapestItem());
// console.log("drinks:: ", asd.drinksOnly());
// console.log("food:: ", asd.foodOnly());
console.log(asd.fulfillOrder());
console.log(asd.fulfillOrder());
console.log(asd.fulfillOrder());
console.log("Cost:: ", asd.dueAmount());
