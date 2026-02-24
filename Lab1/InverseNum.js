const number = 5;

//normal 1
function findInverse(num) {
    return 1/num;
}

//flecha 1
const findInverse = (num) => {
    return 1/num;
}


console.log("normal: " + findInverse(number));
console.log("flecha: " + findInverse(number));