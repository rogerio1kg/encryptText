let btnCopy = document.querySelector('.btn-copy');

btnCopy.onclick =  function() {
    message_result.select();
    document.execCommand("copy");
    message_text.value = "";
    message_text.focus();
    message_result.textContent = "";
    btnCopy.classList.add("invisible");
}