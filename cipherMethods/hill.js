//key and inverse key matrix
const keyMatrix = [[3, 5], [1, 2]]; 
const inverseKeyMatrix = [[2, 21], [25, 3]];

function encryptHill(inputText) {
    let encryptedText = '';
    // Split input text into words
    let words = inputText.toUpperCase().split(' '); 

    // Iterate over each word to encrypt
    for (let w = 0; w < words.length; w++) {
        // Remove non-alphabetic characters
        let word = words[w].replace(/[^A-Z]/g, ''); 
        
        // Make sure word length is even
        if (word.length % 2 !== 0) {
            word += 'X'; 
        }

        // Encrypt each word
        for (let i = 0; i < word.length; i += 2) {
            for (let j = 0; j < 2; j++) {
                let sum = 0;
                for (let k = 0; k < 2; k++) {
                    sum += keyMatrix[j][k] * (word.charCodeAt(i + k) - 'A'.charCodeAt(0));
                }
                encryptedText += String.fromCharCode((sum % 26) + 'A'.charCodeAt(0));
            }
        }

        // Add space after each word except the last one
        if (w < words.length - 1) {
            encryptedText += ' ';
        }
    }

    return encryptedText;
}


//Same logic as encrypt functino but uses the inverseKeyMatrix
function decryptHill(inputText) {
    let decryptedText = '';
    let words = inputText.toUpperCase().split(' ');

    // Iterate over each encrypted word to decrypt
    for (let w = 0; w < words.length; w++) {
        let word = words[w];

        // Decrypt each word
        for (let i = 0; i < word.length; i += 2) {
            for (let j = 0; j < 2; j++) {
                let sum = 0;
                for (let k = 0; k < 2; k++) {
                    let value = inverseKeyMatrix[j][k] * (word.charCodeAt(i + k) - 'A'.charCodeAt(0));
                    sum += value < 0 ? (value % 26) + 26 : value;
                }
                decryptedText += String.fromCharCode((sum % 26) + 'A'.charCodeAt(0));
            }
        }
        //Adds space
        if (w < words.length - 1) {
            decryptedText += ' ';
        }
    }

    return decryptedText;
}


export {encryptHill, decryptHill}