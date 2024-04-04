//Encryption logic
function encryptRailFence(inputText){
    inputText = inputText.toUpperCase();
    let encryptedText = '';
    let i = 0;
    while(i < inputText.length){
        encryptedText += inputText.charAt(i);
        i += 4;
    }
    i = 1;
    while(i < inputText.length){
        encryptedText += inputText.charAt(i);
        i += 2;
    }
    i = 2;
    while(i < inputText.length){
        encryptedText += inputText.charAt(i);
        i += 4;
    }
    return encryptedText;
}

//Decryption logic
function decryptRailFence(inputText) {
    let decryptedText = new Array(inputText.length);
    let idx = 0;

    for (let i = 0; i < inputText.length; i += 4) {
        decryptedText[i] = inputText.charAt(idx++);
    }

    for (let i = 1; i < inputText.length; i += 2) {
        decryptedText[i] = inputText.charAt(idx++);
    }
    
    for (let i = 2; i < inputText.length; i += 4) {
        decryptedText[i] = inputText.charAt(idx++);
    }

    return decryptedText.join('');
}

export {encryptRailFence, decryptRailFence}