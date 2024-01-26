btnCopy.onclick = function () {
    resultText.select();
    document.execCommand("copy");
    textCrypt.value = "";
    textCrypt.focus();
    resultText.textContent = "";
    btnCopy.classList.add("invisible");
};