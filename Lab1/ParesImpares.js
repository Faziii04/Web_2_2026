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
function printOddsAndEvens(arr) {
    let odds = 0;
    let evens = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            odds++;
        } else {
            evens++;
        }
    }
    console.log('Impares: ' + odds);
    console.log('Pares: ' + evens);
}

//flecha 3
const printOddsAndEvensArrow = (arr) => {
    let odds = 0;
    let evens = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            odds++;
        } else {
            evens++;
        }
    }
    console.log('Impares: ' + odds);
    console.log('Pares: ' + evens);
}

//normal 4
function printArr(arr) {
    for (let i=0; i<arr.length; i++) {
        console.log("["+arr[i]+"] ")
    }
}

//flecha 4
const printArrArrow = (arr) => {
    for (let i=0; i<arr.length; i++) {
        console.log("["+arr[i]+"] ")
    }
}

const arr = generateRandomArray(50);
printArr(arr);
printOddsAndEvens(arr);
