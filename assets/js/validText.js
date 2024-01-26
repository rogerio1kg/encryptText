function validText(text) {
  const error = [];

  if (text.value == 0) error.push("Digite algum texto!");

  if (/[A-Z-À-Ú-à-ú]/.test(text.value))
    error.push("Apenas letras minúsculas e sem acento!");

  return error;
}

function showErrors(error) {
  const ul = document.querySelector(".message-error");
  ul.innerHTML = "";

  error.forEach(function (erro) {
    const li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
