function decimalToBinary(num) {
    return num.toString(2);
}

const decimalToBinaryArrow = (num) => {
    return num.toString(2);
}

const number = 10;
console.log("normal: " + decimalToBinary(number));
console.log("flecha: " + decimalToBinaryArrow(number));