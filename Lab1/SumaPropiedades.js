function sumarPropiedad(arr, propiedad) {
    let suma = 0;
    for (let obj of arr) {
        if (obj.hasOwnProperty(propiedad)) {
            suma += obj[propiedad];
        }
    }
    return suma;
}


const sumarPropiedadFlecha = (arr, propiedad) => 
    arr.reduce((total, obj) => total + (obj[propiedad] || 0), 0);


let estudiantes = [
    { nombre: "Ana", edad: 20, nota: 85 },
    { nombre: "Luis", edad: 22, nota: 90 },
    { nombre: "Carlos", edad: 21, nota: 78 }
];

console.log(sumarPropiedad(estudiantes, "edad")); 
console.log(sumarPropiedad(estudiantes, "nota")); 
console.log(sumarPropiedadFlecha(estudiantes, "edad"));
console.log(sumarPropiedadFlecha(estudiantes, "nota"))