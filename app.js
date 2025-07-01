const groceryList = [
  "milk",
  "bread",
  "butter",
  "cheese",
  "egg",
  "rice",
  "beans",
  "tomato",
  "apple",
  "banana"
];

const vegetableList = [
  "spinach",
  "lettuce",
  "carrot",
  "cucumber",
  "broccoli"
];

const cart = [];

// Check for "egg" in groceryList
for (let item of groceryList) {
  if (item.toLowerCase() === "egg") {
    console.log("Egg is available and added to cart");
    cart.push(item);
  }
}

// Check for "carrot" in vegetableList
for (let veg of vegetableList) {
  if (veg.toLowerCase() === "carrot") {
    console.log("Carrot is available and added to cart");
    cart.push(veg);
  }
}

console.log("Cart contains:", cart);

