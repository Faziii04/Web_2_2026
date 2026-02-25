function mostFrequentNumber(numbers) {
    let frequency = {};
    
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    
    let maxCount = 0;
    let mostFrequent = numbers[0];
    
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }
    
    return "El número " + mostFrequent + " se repite " + maxCount + " veces";
}

const mostFrequentNumberArrow = (numbers) => {
    let frequency = {};
    
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    
    let maxCount = 0;
    let mostFrequent = numbers[0];
    
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }
    
    return "El número " + mostFrequent + " se repite " + maxCount + " veces";
}

let nums1 = [5, 3, 5, 7, 5, 2, 8];
let nums2 = [1, 2, 3, 2, 4, 2, 5];
let nums3 = [9, 9, 8, 7, 9, 6, 9];

console.log("Normal función: " + mostFrequentNumber(nums1));
console.log("Flecha función: " + mostFrequentNumberArrow(nums1));
console.log("");
console.log("Normal función: " + mostFrequentNumber(nums2));
console.log("Flecha función: " + mostFrequentNumberArrow(nums2));
console.log("");
console.log("Normal función: " + mostFrequentNumber(nums3));
console.log("Flecha función: " + mostFrequentNumberArrow(nums3));
