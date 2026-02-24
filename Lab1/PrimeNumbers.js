//normla 1
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


//felcha 1
const getRandomIntArrow = (min, max) => {
    min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}


//nurmal 2
function generateRandomArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomInt(1, 100));
    }
    return arr;
}

//flecha 2
const generateRandomArrayArrow = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomInt(1, 100));
    }
    return arr;
}

//normal 3
function printArr(arr) {
    for (let i=0; i<arr.length; i++) {
        console.log("["+arr[i]+"] ")
    }
}

//flecha 3
const printArrArrow = (arr) => {
    for (let i=0; i<arr.length; i++) {
        console.log("["+arr[i]+"] ")
    }
}


//normal 4
function primeOnlyNumbers(arr) {
    const primes = [];
    for (let i=0; i<arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j=2; j<arr[i]; j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(arr[i]);
        }
    }
    return primes;
}

//flecha 4
const primeOnlyNumbersArrow = (arr) => {
    const primes = [];
    for (let i=0; i<arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j=2; j<arr[i]; j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(arr[i]);
        }
    }
    return primes;
}

let arr = generateRandomArray(50);
printArr(arr);
let primesArr = primeOnlyNumbers(arr);
console.log("Numeros primos: ")
printArr(primesArr);