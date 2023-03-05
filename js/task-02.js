// test
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const items = [];
ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  listItem.classList.add('item');
  items.push(listItem);
});
list.append(...items);