
const btnCopy = document.querySelector('.btn-copy');

btnCopy.addEventListener('click', () => {
    const result = document.querySelector('.message-result');
    result.select();
    document.execCommand('copy');

    const textMessage = document.querySelector('.message-text');

    textMessage.value = '';
    textMessage.focus();
    result.textContent = '';

    btnCopy.classList.add('invisible');
})