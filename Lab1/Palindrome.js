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