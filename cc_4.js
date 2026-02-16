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