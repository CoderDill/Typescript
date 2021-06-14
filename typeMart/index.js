"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = 'fanny pack';
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
var shipping = 0;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "123 Cherry Street, New York, New York";
if (product.preOrder === 'true') {
    console.log("We'll send you a message when your item ships.");
}
product.price > '25' ? console.log("You're shipping is free!") : shipping = 5;
shippingAddress.match("New York") ? taxPercent = .1 : taxPercent = .05;
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
console.log(taxTotal.toFixed);
console.log("\nProduct:  " + product.name + "\nAddress:  " + shippingAddress + "\nPrice:    $" + product.price + "\nTax:      $" + taxTotal.toFixed(2) + "\nShipping: $" + shipping.toFixed(2) + "\nTotal:    $" + total.toFixed(2) + "\n");
