const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener('input', function () {
    span.style.fontSize = input.value + 'px';
})