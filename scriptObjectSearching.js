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


function searchInGoods(arrToSearch, argToSearch) {
  const arr = Array.from(arrToSearch);
  let arg = [];
  if (arr.find(element => element.category == argToSearch)) {
    const result = arr.filter(element => element.category == argToSearch);
    arg = result;
  } else
  if ((argToSearch !== undefined)) {
    const result = arr.filter(element => element.name == argToSearch);
    arg = result;
  };
  if (arg.length <= 0) {
    return 'Not found';
  } else { return arg }
};