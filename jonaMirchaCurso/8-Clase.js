// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos 
// arreglos, el primero tendrá los numeros ordenados en forma ascendente y el 
// segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
// devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const generarArrDscAsc = (array) => {
    if (!(array instanceof Array)) return console.log('sólo se aceptan arrays');
    const arrAsc = array.map(valor => valor).sort();
    const arrDsc = array.map(valor => valor).sort().reverse();

    console.log({
        ascendente: arrAsc,
        descendente: arrDsc
    });
};

// generarArrDscAsc([7, 5, 7, 8, 6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los 
// duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminaRepetidos = (array) => {
    if (!(array instanceof Array)) return console.log('sólo se aceptan arrays como argumento');
    const arraySinRepetir = [];
    for (let i of array) {
        if (!arraySinRepetir.includes(i)) {
            arraySinRepetir.push(i);
        }
    }
    console.log(arraySinRepetir);

};

// eliminaRepetidos(["x", 10, "x", 2, "10", 10, true, true]);


// 26) Programa una función que dado un arreglo de números obtenga el promedio,
//  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (array = undefined) => {
    if (array == undefined) return console.log('asegurate de mandar un array que contega al menos dos números');
    if (!(array instanceof Array)) { return console.log('sólo se aceptan arrays como argumentos'); }
    if (array.length == 0) return console.log('asrgurate de mandar un array con al menos dos números');
    for (let i of array) {
        if (typeof(i) != 'number') {
            return console.log('asegurate de mandar un array que sólo contenga números');
        }
    }
    let suma = 0;
    for (let i of array) {
        suma += i;
    }
    const promedio = suma / array.length;
    console.log(`el promedio de la lista ingresada es ${promedio}`);
};

promedio([9, 8, 7, 6.5, 5, 4, 3, 2, 1, 0]);