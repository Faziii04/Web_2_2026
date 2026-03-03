<<<<<<< HEAD
function InvertWord (word) {
    let invertedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }
    return invertedWord;
}

const InvertWordArrow = (word) => {
    let invertedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }
    return invertedWord;
}

let word = "palindrome";
console.log("normal: " + InvertWord(word));
console.log("flecha: " + InvertWordArrow(word));
=======
function isPalindrome(str) {
    if (str == reverseString(str)) {
        return true;
    }
    return false;
}

const isPalindromeArrow = (str) => {
    if (str == reverseStringArrow(str)) {
        return true;
    }
    return false;
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reverseStringArrow = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("Normal 'ana': " + isPalindrome("ana"));
console.log("Flecha 'ana': " + isPalindrome("ana"));
console.log("Normal 'perro': "+ isPalindromeArrow("perro"));
console.log("Flecha 'perro': "+ isPalindromeArrow("perro"));

>>>>>>> af94378b54e16318b1d06d061ad53ebff20b5a8a
