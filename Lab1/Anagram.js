function isAnagram(str, str2) {
    if (str.length !== str2.length) return false;
    const arr = [];
    for (let i = 0; i <= 255; ++i) arr[i] = 0;
    
    for (let i = 0; i < str.length; ++i) {
        let charA = str[i].charCodeAt(0);
        let charB = str2[i].charCodeAt(0);
        arr[charA]++;
        arr[charB]--;
    }

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) return false;
        return true;
    }
}

const isAnagramArrow = (str, str2) => {
    if (str.length !== str2.length) return false;
    const arr = [];
    for (let i = 0; i <= 255; ++i) arr[i] = 0;
    
    for (let i = 0; i < str.length; ++i) {
        let charA = str[i].charCodeAt(0);
        let charB = str2[i].charCodeAt(0);
        arr[charA]++;
        arr[charB]--;
    }

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) return false;
        return true;
    }
}



console.log("Es palindromo 'saco/cosa ?")
console.log("Normal: " + isAnagram("saco", "cosa"))
console.log("Flecha: " + isAnagramArrow("saco", "cosa"))
