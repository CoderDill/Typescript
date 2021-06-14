import products from "./products";

const productName: string = 'fanny pack';
const product = products.filter(product => product.name === productName)[0];
let shipping: number = 0;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "123 Cherry Street, New York, New York";

if (product.preOrder === 'true') {
    console.log("We'll send you a message when your item ships.")
}

product.price > '25' ? console.log("You're shipping is free!") : shipping = 5;

shippingAddress.match("New York") ? taxPercent = .1 : taxPercent = .05;

taxTotal = Number(product.price) * taxPercent;

total = taxTotal + Number(product.price) + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);