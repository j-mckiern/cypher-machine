//imports the 3 different cipher methods which includes encrypt and decrypt functions
import {encryptPolybius, decryptPolybius} from './cipherMethods/polybius.js';
import {encryptHill, decryptHill} from './cipherMethods/hill.js';
import {encryptRailFence, decryptRailFence} from './cipherMethods/railFence.js';

//Changes display message depending on cypher type
document.getElementById('cypher-type1').addEventListener('change', function() {
    updateInputBoxPlaceholder('Polybius Cipher - Enter a message containing only letters a-z for encryption or numbers 1-6 for decryption');
    clearInputBox();
});
document.getElementById('cypher-type2').addEventListener('change', function() {
    updateInputBoxPlaceholder('Hill cipher - Enter a message containing only letters a-z');
    clearInputBox();
});
document.getElementById('cypher-type3').addEventListener('change', function() {
    updateInputBoxPlaceholder('Rail Fence Cipher - Enter a message containing only letters a-z');
    clearInputBox();
});

//Encypt and Decrypt button functions
document.getElementById('encrypt-button').addEventListener('click', function() {
    displayTextInNewBox('encrypt');
});
document.getElementById('decrypt-button').addEventListener('click', function() {
    displayTextInNewBox('decrypt');
});

function updateInputBoxPlaceholder(text) {
    document.getElementById('input-box').placeholder = text;
}

function clearInputBox() {
    document.getElementById('input-box').value = '';
}

window.onload = function() {
    if(document.getElementById('cypher-type1').checked) {
        updateInputBoxPlaceholder('Polybius Cipher - Enter a message containing only letters a-z for encryption or numbers 1-6 for decryption');
    } else if(document.getElementById('cypher-type2').checked) {
        updateInputBoxPlaceholder('Hill cipher - Enter a message containing only letters a-z');
    } else if(document.getElementById('cypher-type3').checked) {
        updateInputBoxPlaceholder('Rail Fence Cipher - Enter a message containing only letters a-z');
    }
    clearInputBox();
};

//Creates encrypted/decrypted text when buttons are clicked after inputing text in inputbox
function displayTextInNewBox(action){
    var inputText = document.getElementById('input-box').value;
    if (inputText.length === 0) {
        alert("Please enter some text to proceed.");
        return;
    }

    var outputText = '';

    var resultType = document.createElement('h3')
    resultType.className = 'results-display-type';

    //Handles the encrypt functions
    if(action === 'encrypt'){
        if (!/^[a-zA-Z ]+$/.test(inputText)) {
            alert("Please enter only letters from a-z");
            return;
        }
        //Polyibus
        if(document.getElementById('cypher-type1').checked){
            resultType.textContent = 'Encrypted Polyibus Message:'
            outputText = encryptPolybius(inputText);
        }
        //Hill
        else if(document.getElementById('cypher-type2').checked){
            resultType.textContent = 'Encrypted Hill Message:'
            outputText = encryptHill(inputText);
        }
        //Rail Fence
        else if(document.getElementById('cypher-type3').checked){
            resultType.textContent = 'Encrypted Rail Fence Message:'
            outputText = encryptRailFence(inputText);
        }
        
    }
    //Handles the decrypt functions
    else if(action === 'decrypt'){
        //Polyibus
        if(document.getElementById('cypher-type1').checked){
            if (!/^[1-6][1-6]+$/.test(inputText) || inputText.length % 2 !== 0) {
                alert("Please only enter number pairs with no spaces where the first number is between 1-6 and the second number is between 1-6");
                return;
            }
            resultType.textContent = 'Decrypted Polyibus Message:'
            outputText = decryptPolybius(inputText);
        }
        //Hill
        else if(document.getElementById('cypher-type2').checked){
            if (!/^[a-zA-Z ]+$/.test(inputText)) {
                alert("Please enter only letters from a-z with no spaces");
                return;
            }
            resultType.textContent = 'Decrypted Hill Message:'
            outputText = decryptHill(inputText); 
        }
        //Rail Fence
        else if(document.getElementById('cypher-type3').checked){
            if (!/^[a-zA-Z ]+$/.test(inputText)) {
                alert("Please enter only letters from a-z");
                return;
            }
            resultType.textContent = 'Decrypted Rail Fence Message:'
            outputText = decryptRailFence(inputText);
        }
    }

    var headerDiv = document.getElementById('results-display');
    headerDiv.innerHTML = '';
    headerDiv.appendChild(resultType);

    var newTextArea = document.createElement('textarea');
    newTextArea.className = 'message-output-textarea';
    newTextArea.value = outputText;
    newTextArea.readOnly = true;

    var outputDiv = document.getElementById('message-output');
    outputDiv.innerHTML = '';
    outputDiv.appendChild(newTextArea);
}