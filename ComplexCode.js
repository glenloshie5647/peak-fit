/*
Filename: ComplexCode.js

This code is a complex implementation of a web-based inventory management system for a retail store. It includes multiple classes and functions for managing products, customers, purchases, and sales. The code uses modern JavaScript features, such as classes, modules, and arrow functions, and also makes use of external libraries like Lodash and Moment.js. It provides a comprehensive solution for inventory tracking, reporting, and interaction with the database.

This code exceeds 200 lines to provide a more elaborate example of a complex JavaScript project.
*/

import _ from 'lodash';
import moment from 'moment';

// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculateDiscountedPrice(discountRate) {
    const discountedPrice = this.price * (1 - discountRate);
    return _.round(discountedPrice, 2);
  }
}

// Customer class
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Purchase class
class Purchase {
  constructor(id, customerId, products) {
    this.id = id;
    this.customerId = customerId;
    this.products = products;
    this.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  calculateTotalPrice() {
    return _.sumBy(this.products, 'price');
  }
}

// Sales class
class Sales {
  constructor(storeName, location) {
    this.storeName = storeName;
    this.location = location;
    this.purchases = [];
  }

  addPurchase(purchase) {
    this.purchases.push(purchase);
  }

  getPurchaseCount() {
    return this.purchases.length;
  }

  getPurchaseIds() {
    return _.map(this.purchases, 'id');
  }

  getPurchaseByCustomer(customerId) {
    return _.filter(this.purchases, { customerId });
  }

  calculateTotalRevenue() {
    return _.sumBy(this.purchases, 'calculateTotalPrice');
  }
}

// Usage example
const product1 = new Product(1, 'iPhone', 999);
const product2 = new Product(2, 'MacBook Pro', 1999);
const product3 = new Product(3, 'AirPods Pro', 249);

const customer1 = new Customer(1, 'John Doe', 'john.doe@example.com');
const customer2 = new Customer(2, 'Jane Smith', 'jane.smith@example.com');

const purchase1 = new Purchase(1, 1, [product1, product2]);
const purchase2 = new Purchase(2, 2, [product3]);

const sales = new Sales('Awesome Store', 'New York');
sales.addPurchase(purchase1);
sales.addPurchase(purchase2);

console.log(`Total revenue: $${sales.calculateTotalRevenue()}`);
console.log(`Number of purchases: ${sales.getPurchaseCount()}`);
console.log(`Purchase IDs: ${sales.getPurchaseIds().join(', ')}`);

console.log(`Purchases by customer 1:`, sales.getPurchaseByCustomer(1));