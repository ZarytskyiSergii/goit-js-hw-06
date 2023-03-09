
// const categoriesList = document.querySelector('ul#categories');
// const categoriesItems = categoriesList.querySelectorAll('li.item');
// console.log(`Number of categories: ${categoriesItems.length}`);
// categoriesItems.forEach(item => {
//   const categoriesName = item.querySelector('h2').textContent;
//   const categoriesElements = item.querySelectorAll('li').length;
//   console.log(`Category: ${categoriesName}`);
//   console.log(`Elements: ${categoriesElements}`);
// });

// Variant2
const links = document.querySelectorAll('.item');
console.log(`Number of categories ` + links.length);
const items = [...links].map((link) => {
  console.log("Category: " + link.firstElementChild.textContent);
  console.log("Elements: " + link.lastElementChild.children.length);
});