

function encryptText(textMessage) {
    const map = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };
    return textMessage.split('').map(char => map[char] || char).join('');
}

function decryptText(textMessage) {
    const map = {
       'ai': 'a',
       'enter': 'e',
       'imes': 'i',
       'ober': 'o',
       'ufat': 'u'
    };
    return textMessage.replace(/ai|enter|imes|ober|ufat/g, match => map[match]);
}