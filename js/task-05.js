const input = document.getElementById("name-input");
const span = document.getElementById("name-output");
const spanText = span.textContent;

input.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        span.textContent = spanText;
    }else (span.textContent = event.currentTarget.value);
});
