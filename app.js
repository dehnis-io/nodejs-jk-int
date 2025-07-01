const groceryList = ["milk", "bread", "butter", "cheese", "egg", "rice", "beans", "tomato", "apple", "banana"];

const cart = [];

for (let item of groceryList) {
  if (item.toLowerCase() === "egg") {
    console.log("Egg is available and added to cart");
    cart.push(item); // Add egg to cart
  }
}

console.log("Cart contains:", cart);
