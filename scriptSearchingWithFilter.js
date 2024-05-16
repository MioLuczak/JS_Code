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

// Implementing prompt to established limitprice
let limitPrice = '';
do {
    limitPrice = prompt('Input upper price limit:');
} while (isNaN(limitPrice) || limitPrice === null);

// Function that returns products that meets pricelimit criteria
function searchProductsToPriceLimit(limitPrice, callback) {
    productsDuplicate.forEach((element) => {
        if (element.available === true) {
            if (element.price < limitPrice) {
                return callback(element.name, element.price);
            }
        }
    })
}

// Function for pretty displaying in console
function prettyDisplay(showName, showPrice) {
    console.log(`Product: ${showName}; Price: ${showPrice}`)
}

console.log(`Showing available products meeting search criteria: Price < ${limitPrice}`);
searchProductsToPriceLimit(limitPrice, prettyDisplay);