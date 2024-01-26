
// Declare all string replacements in an object
const replacements = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

// Get elements once and store in variables
const textCrypt = document.querySelector('.message_text');
const resultText = document.querySelector('.message_result');
const btnCrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const alertError = document.querySelector('.message-error');
const btnCopy = document.querySelector('.btn-copy');

// Combine encryption and decryption into a single function
function transformText(text, isEncrypt) {
    let transformedText = text.value;

    for (const [key, value] of Object.entries(replacements)) {
        transformedText = isEncrypt ? transformedText.split(key).join(value) : transformedText.split(value).join(key);
    }

    return transformedText;
}

// Function to handle validation and show errors
function handleButtonClick(isEncrypt) {
    const errors = validText(textCrypt);

    if (errors.length > 0) {
        showErrors(errors);
        resultText.textContent = "";
        return;
    }

    const transformedText = isEncrypt ? transformText(textCrypt, true) : transformText(textCrypt, false);
    resultText.textContent = transformedText;
    alertError.innerHTML = "";

    // Remove invisible class from btnCopy
    btnCopy.classList.remove('invisible');
}

// Assign event handlers to buttons
btnCrypt.onclick = function () {
    handleButtonClick(true);
};

btnDecrypt.onclick = function () {
    handleButtonClick(false);
};
