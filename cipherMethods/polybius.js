//Creates Polybius square
function getPolybiusSquare(){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let square = [];
    for(let i = 0; i < 6; i++){
        square[i] = [];
        for(let j = 0; j < 5; j++){
            if(5 * i + j < letters.length){
                square[i][j] = letters[5 * i + j];
            }
            else{
                square[i][j] = '';
            }
        }
    }
    return square;
}

function encryptPolybius(inputText){
    inputText = inputText.toUpperCase();
    let square = getPolybiusSquare();
    let encryptedText = '';

    //turns letters into ##
    for (let char of inputText) {
        if (char >= 'A' && char <= 'Z') {
            let found = false;
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 5; j++) {
                    if (square[i][j] === char) {
                        encryptedText += `${i + 1}${j + 1}`;
                        found = true;
                        break;
                    }
                }
                if (found) break;
            }
        }
        //If space is detected replaces it with 66
        else if(char === ' '){
            encryptedText += '66';
        }
    }
    return encryptedText;
}

function decryptPolybius(inputText){
    let square = getPolybiusSquare();
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i += 2) {
        //Replaces ## with letter
        let row = parseInt(inputText[i]) - 1;
        let col = parseInt(inputText[i + 1]) - 1;
        if (row < 6 && col < 6 && square[row][col]) {
            decryptedText += square[row][col];
        }
        //If 66 replace with space
        else if(row === 5 && col === 5){
            decryptedText += ' ';
        }
        //If number isnt a letter in table replace with ?
        else {
            decryptedText += '?';
        }
    }
    return decryptedText;
}

export {encryptPolybius, decryptPolybius}