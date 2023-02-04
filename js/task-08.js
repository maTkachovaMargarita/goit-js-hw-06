const form = document.querySelector(".login-form");

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const mail = formElement.email.value;
    const password = formElement.password.value;

    if (mail === '' || password === '') {
        return alert('Всі поля мають бути заповненні');
    }

    const formData = {
        mail,
        password,
    }

    console.log(formData);

    form.reset();
}
