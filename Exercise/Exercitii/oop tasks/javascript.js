//Task 1
// function Car(name, model, year, mileage) {
//   this.name = name;
//   this.model = model;
//   this.year = year;
//   this.mileage = mileage;
//   this.getSummary = function () {
//     return `${this.name} ${this.model} build in ${this.year} and having now ${this.mileage}km`;
//   };
// }
// const volvo = new Car("Volvo", "XC90", "2022", 120000);
// const volkswagen = new Car("Volkswagen", "Golf", "2020", 176000);
// const audi = new Car("Audi", "SQ8", "2023", 78000);
// const bmw = new Car("BMW", "M540d", "2023", 37000);
// console.log(volvo, volkswagen, audi, bmw);
// Car {name: 'Volvo', model: 'XC90', year: '2022', mileage: 120000, getSummary: ƒ}
//Task 2 - Model
// function Caine(nume, rasa, varsta, stapan) {
//     this.nume = nume;
//     this.rasa = rasa;
//     this.varsta = varsta;
//     this.stapan = stapan;
//     this.latra = function() {
//       return(${this.nume} latra);
//     };
//     this.info = function() {
//       return(Nume: ${this.nume}, Rasa: ${this.rasa}, varsta: ${this.varsta} ani);
//     };
//   }
//   const caine1 = new Caine("Picky" , "bichon", 5 , true);
//   const caine2 = new Caine("Dog" , "Maidanez" , 9 , false );
//   console.log(caine1);
//   console.log(caine2.rasa);
//   function AdapostCaini(caini) {
//     this.cainiNeadoptati = [];
//     for(let counter = 0; counter <= caini.length; counter++)
//             {
//                 if(caini[counter] instanceof Caine){
//                     this.adapostCaini.push(caini[counter])
//                 }
//             }
// }

// Task 1
// Create a class called Product
// It should have public properties name, price, and quantity
// It should have private properties number of sales, initial price
// It should have a method called getTotalPrice
// It should have a method to sell the product
// It should have a property to calculate profit

// class Product {
//   constructor(name, price, quantity) {
//     if (price < this.#initialPrice) {
//       throw new Error("Price too low!");
//     }
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   #numberOfSales = 100;
//   #initialPrice = 35;

//   getTotalPrice() {
//     return this.quantity * this.price;
//   }

//   productSale() {
//     if (this.quantity > 1) {
//       this.#numberOfSales++;
//       this.quantity--;
//     } else {
//       return "I'm sorry..";
//     }
//   }

//   finalProfit() {
//     let profit = this.#numberOfSales * (this.price - this.initialPrice);
//   }
// }

// const product1 = new Product(`adidas`, 4, 5);
// product1.productSale();
// product1.productSale();
// product1.productSale();
// product1.productSale();
// product1.productSale();
// console.log(product1.finalProfit());

class Product {
  // Constructorul setează proprietățile
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.#initialPrice = price;
    this.#numberOfSales = 0;
  }

  // 🔒 Proprietăți private
  #numberOfSales;
  #initialPrice;

  // ✅ Returnează prețul total pentru toate unitățile rămase
  getTotalPrice() {
    return this.price * this.quantity;
  }

  // ✅ Vinde o anumită cantitate, dacă este disponibilă
  sell(units) {
    if (units > this.quantity) {
      console.log(`Nu sunt suficiente produse în stoc.`);
      return;
    }

    this.quantity -= units;
    this.#numberOfSales += units;
    console.log(`${units} unități de ${this.name} au fost vândute.`);
  }

  // ✅ Getter pentru profit
  get profit() {
    const castigtotal = this.#numberOfSales * (this.price - this.#initialPrice);
    return castigtotal;
  }
}

// ✅ Testare
const laptop = new Product("Laptop", 1500, 10);

// Preț total pe stoc
console.log("Preț total stoc:", laptop.getTotalPrice()); // 15000

// Vinde 3 unități
laptop.sell(3);

// Verifică stocul rămas
console.log("Stoc rămas:", laptop.quantity); // 7

// Afișează profitul
console.log("Profit realizat:", laptop.profit); // 0 dacă prețul curent = inițial

// Task 2
// Create a class called Cart
// It should have static properties:
// - taxRate: 0.19 (19% VAT)
// - shippingCost: 5.99 (standard shipping fee)

// It should have static methods:
// - calculateTax(amount): returns the tax amount for a given price
// - calculateShipping(weight): returns shipping cost based on product weight
// - formatPrice(amount): returns price formatted with currency symbol

// It should have instance methods:
// - addProduct(product, quantity): adds a product to the
// - getTotal(): calculates total cost including tax and shipping
// - clearCart(): removes all products from the cart

class Cart {
  static taxRate = 0.19;
  static shippingCost = 5.99;

  static calculateTax(amount) {
    return amount * Cart.taxRate;
  }
  static calculateShipping(weight) {
    if (weight > 6) {
      return Cart.shippingCost;
    } else {
      return 0;
    }
  }
  static formatPrice(amount) {
    return `${amount.toFixed(2)} €`;
  }

  constructor() {
    this.items = [];
  }

  addProduct(quantity, item) {
    const newItem = {
      name: item.name,
      quantity: quantity,
      weight: item.weight,
      price: item.price,
    };
    this.items.push(newItem);
  }

  removeProduct(itemName) {
    const result = this.items((name) => name !== itemName);
    this.items = result;
  }
  clearCart() {
    this.items = [];
  }
  getTotal() {
    let total = 0;
    for (const item of this.items) {
      const totalAmount =
        Cart.calculateTax(item.price) + Cart.calculateShipping(item.weight);
      total += totalAmount;
    }
    return Cart.formatPrice(total);
  }
}

const EmagCart = new Cart();

Cart.addProduct(5, {
  name: "tastatura",
  weight: 6,
  price: 100,
});

console.log(EmagCart.getTotal());
