const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

const allLi = ingredients.map((ingredient) => {
    let item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    return item;
});

list.append(...allLi);

console.log(list);