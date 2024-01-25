

function validateText(text) {
    const errors = [];

    if (text.value.lenght === 0) {
        errors.push("Digite algum texto!");
    } else {
        if (/[A-ZÀ-Úà-ú]/.test(text.value)) {
            errors.push("Apenas lestra minúsculas e sem acento! ");
        }
    }

    return errors;
}

function displayError(errors) {
    const ul = document.querySelector('message-error');
    ul.innerHTML = "";

    errors.forEach(function(error) {
        const li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
