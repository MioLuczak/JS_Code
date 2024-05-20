// Creating products array
const groceryStoreProducts = [
  { name: 'Garlic', category: 'Vegetables', isAvailable: true },
  { name: 'Onion', category: 'Vegetables', isAvailable: true },
  { name: 'Potatoes', category: 'Vegetables', isAvailable: false },
  { name: 'Eggs', category: 'Dairy', isAvailable: true },
  { name: 'Butter', category: 'Dairy', isAvailable: false },
  { name: 'Milk', category: 'Dairy', isAvailable: true },
  { name: 'Sliced Cheese', category: 'Dairy', isAvailable: true },
  { name: 'Sour Cream', category: 'Dairy', isAvailable: true },
  { name: 'Biscuits', category: 'Bakery', isAvailable: true },
  { name: 'Pie', category: 'Bakery', isAvailable: false },
  { name: 'Pomegranate', category: 'Fruits', isAvailable: true },
  { name: 'Pear', category: 'Fruits', isAvailable: true },
  { name: 'Apple', category: 'Fruits', isAvailable: false },
  { name: 'Chicken breast', category: 'Meat', isAvailable: true },
  { name: 'Pork', category: 'Meat', isAvailable: true },
];

function searchWithName(nameToSearch) {
    const result = Array.from(groceryStoreProducts.filter(element => element.name == nameToSearch));
    return result;
};