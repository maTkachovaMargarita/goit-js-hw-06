const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

const li = ingredients.map((ingredient) => {
    let item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    return item;
});

list.append(...li);

console.log(list);