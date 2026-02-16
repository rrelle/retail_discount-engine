const products = [
  { name: 'Laptop', category: 'Electronics', inventory: 10, price: 999 },
  { name: 'Airfreshener', category: 'Household', inventory: 25, price: 15 },
  { name: 'Tablet', category: 'Electronics', inventory: 15, price: 499 },
    { name: 'Strawberries', category: 'Groceries', inventory: 50, price: 199 },
    { name: 'Skirt', category: 'Apparel', inventory: 20, price: 20 },
];
for (const product of products) {
    switch (product.category) {
        case 'Electronics':
      product.price = product.price * 0.8; // Apply a 20% discount
        break;
        case 'Apparel':
      product.price = product.price * 0.85; // Apply a 15% discount
        break;
        case 'Groceries':
      product.price = product.price * 0.90; // Apply a 10% discount
      break;
        case 'Household':
      product.price = product.price * 0.9; // Apply a 10% discount
        break;
        default:
            product.price = product.price; // No discount for other categories
    }
}
console.log(products);
function applyDiscount(product) {
    if (product.category === 'student') {
        product.price = product.price * 0.95; // Apply a 5% discount for students
    }
    else if (product.category === 'senior') {
        product.price = product.price * 0.93; // Apply a 7% discount for seniors
    }
    else return product.price; // No discount for other categories
}
console.log(applyDiscount({ name: 'Book', category: 'student', price: 20 })); // Should apply a 5% discount

const customerTypes = ['regular', 'student', 'senior'];
for (let i = 0; i < 3; i++) {
    let total = 0;



for (const product of products) {
    if (product.inventory > 0) {
        total += product.price;
        product.inventory -= 1; // Decrease inventory by 1 for each product sold
    }
}
console.log(`Total price for customer type ${customerTypes[i]}: $${total.toFixed(2)}`);
}



console.log("\nSingle Product Details:");
for (const product of products) {
    console.log(product);
}
const singleProduct = products[0]; // Get the first product
console.log("\nDetails of Single Product:");
console.log(singleProduct);

console.log("\nAll Products After Inventory:")
for (const product of products) {
    console.log(product);

    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}
