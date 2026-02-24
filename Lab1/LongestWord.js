let phrase = "Juancito camino por la vereda hasta que encontro un dinosaurio tan feo que no volteo a verlo de nuevo";

const longestWordFunc = (phrase) => {
    let arr = phrase.split(" ")
    let longestWord = "";
    if (arr.length === 0) return null;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            longestWord = arr[i];
        }
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord
}

console.log("normal: " + longestWordFunc(phrase))
console.log("flecha: " + longestWordFunc(phrase))
