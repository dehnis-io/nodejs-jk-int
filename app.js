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

// Function to get a random item from a list
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Pick random grocery item and vegetable
const selectedGrocery = getRandomItem(groceryList);
const selectedVegetable = getRandomItem(vegetableList);

// Check and add selected grocery item
if (groceryList.includes(selectedGrocery)) {
  console.log(`${selectedGrocery} is available and added to cart`);
  cart.push(selectedGrocery);
}

// Check and add selected vegetable
if (vegetableList.includes(selectedVegetable)) {
  console.log(`${selectedVegetable} is available and added to cart`);
  cart.push(selectedVegetable);
}

console.log("Cart contains:", cart);
