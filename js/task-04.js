const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

let counterValue = 0;

incrementBtn.addEventListener("click", function () {
    counterValue += 1;
    value.textContent = counterValue;
});

decrementBtn.addEventListener("click", function () {
    counterValue -= 1;
    value.textContent = counterValue;
});


