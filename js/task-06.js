const input = document.getElementById("validation-input");
const inputLength = input.getAttribute("data-length");



input.addEventListener('blur', function () {
    input.classList.remove("valid");
    input.classList.remove("invalid");
    if (input.value.length === Number(inputLength))
        input.classList.add("valid");
    else input.classList.add("invalid");
});


