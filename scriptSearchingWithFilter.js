// Generated random array from JSONGenerator
const products = [
  {
    name: "Unbranded Metal Bacon",
    price: 67.0,
    available: false,
    stock: 120,
  },
  {
    name: "Luxurious Concrete Bike",
    price: 283.0,
    available: true,
    stock: 105,
  },
  {
    name: "Handmade Metal Table",
    price: 550.0,
    available: false,
    stock: 91,
  },
  {
    name: "Recycled Plastic Chips",
    price: 489.0,
    available: true,
    stock: 122,
  },
  {
    name: "Awesome Plastic Bike",
    price: 359.0,
    available: true,
    stock: 97,
  },
  {
    name: "Oriental Metal Table",
    price: 190.0,
    available: true,
    stock: 110,
  },
  {
    name: "Ergonomic Metal Shirt",
    price: 419.0,
    available: false,
    stock: 62,
  },
  {
    name: "Oriental Wooden Soap",
    price: 719.0,
    available: true,
    stock: 58,
  },
  {
    name: "Handmade Wooden Bacon",
    price: 285.0,
    available: false,
    stock: 122,
  },
  {
    name: "Sleek Fresh Car",
    price: 872.0,
    available: false,
    stock: 62,
  },
];
// Replica of original products array
const productsDuplicate = structuredClone(products);

// Changing the stock value to 0 if the products isn't available
productsDuplicate.forEach((element) => {
    if(element.available === false) {
        element.stock = 0
    }
})

// Function that returns products that meets pricelimit criteria
function searchProductsToPriceLimit(limitPrice) {
    productsDuplicate.forEach((element) => {
        if (element.available === true) {
            if (element.price < limitPrice) {
                console.log(element.name);
            }
        }
    })
}

// searchProductsToPriceLimit(100);
// console.log('');
// searchProductsToPriceLimit(300);
// console.log('');
// searchProductsToPriceLimit(600);
console.log(products);
console.log(productsDuplicate);