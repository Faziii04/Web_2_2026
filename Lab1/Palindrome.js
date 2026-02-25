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

