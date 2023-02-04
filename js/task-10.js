function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById('boxes');

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
      const div = document.createElement("div");
      div.style.width = (30 + 10 * i) + 'px';
      div.style.height = (30 + 10 * i) + "px";
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = 5 + "px"; 
      boxes.append(div);
    }
  return boxes;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}


