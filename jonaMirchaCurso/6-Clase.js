const contarVocalesYConsonantes = (cadena = undefined) => {
    if (cadena == undefined) return console.log('no se aceptan valores vacío, ingresa una cadena');
    if (typeof(cadena) != 'string') return console.log('sólo se aceptan cadenas, porfa ingresa una');
    const cadenaSinEspacios = cadena.replace(/ /g, ""); // eliminas todos los espacios en blanco de la cadena
    const cadenaArr = cadenaSinEspacios.split(''); //este  método convierte la cadena ingresada a un array
    // const cadenaArr = cadenaSinEspacios.split(/[\s,]+/); //este  método convierte la cadena ingresafda a un array
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    const arrayVocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i in cadenaArr) {
        const elementoMinus = cadenaArr[i].toLowerCase();
        (arrayVocales.includes(elementoMinus)) ?
        contadorVocales++ : contadorConsonantes++;
    }

    console.log(`el texto ${cadena.toLowerCase()} tiene ${contadorVocales} vocales y
     ${contadorConsonantes} consonantes`);
    // console.log(cadenaArr);
};

// solución de jona mircha
// const contarletras = (cadena = "") {
//     let vocales = 0;
//     let consonantes = 0;
//     for (let letra of cadena) {
//         if (/[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra)) {
//             vocales++;

//         }
//         if (/[BCDFGHIJKLMNÑOPQRSTVWXYZ]/.test(letra)) {
//             consonantes++;

//         }
//     }
// }

contarVocalesYConsonantes("Gustavo Fernando Valle Soriano");

const esNombreValido = (cadena = undefined) => {
    if (typeof(cadena != 'string')) return console.log('sólo se aceptan cadenas como argumento');
    if (cadena == undefined) return console.log('no ingresaste nada, debes escribie al menos nombre y apellido');
    const cadenaArr = cadena.split(' ');
    if (cadenaArr.length == 1 || cadenaArr.length == 0 || cadenaArr.length > 4) return console.log('debes ingresar el menos nombre y apellido, el nombre no es valido');
    const [pimerNombre, segundoNombre, primerApellido, segundoApellido] = cadenaArr;
    if (cadenaArr.length == 4) {
        const comprobarMayusPrimNombre = pimerNombre[0] == pimerNombre[0].toUpperCase();
        const comprobarMayusSegNombre = segundoNombre[0] == segundoNombre[0].toUpperCase();
        const comprobarMayusPrimerApe = primerApellido[0] == primerApellido[0].toUpperCase();
        const comprobarMayusSegundoApe = segundoApellido[0] == segundoApellido[0].toUpperCase();
        if (comprobarMayusPrimNombre && comprobarMayusSegNombre && comprobarMayusPrimerApe && comprobarMayusSegundoApe) {
            console.log('el nombre de 4 es valido');
        } else { console.log('no valido el nombre de 4'); }
    } else if (cadenaArr.length == 3) {
        const comprobarMayusPrimNombre = pimerNombre[0] == pimerNombre[0].toUpperCase();
        const comprobarMayusSegNombre = segundoNombre[0] == segundoNombre[0].toUpperCase();
        const comprobarMayusPrimerApe = primerApellido[0] == primerApellido[0].toUpperCase();
        if (comprobarMayusPrimNombre && comprobarMayusSegNombre && comprobarMayusPrimerApe) {
            console.log('el nombre de 3 es valido');
        } else { console.log('no valido el nombre de 3'); }

    } else if (cadenaArr.length == 2) {
        const comprobarMayusPrimNombre = pimerNombre[0] == pimerNombre[0].toUpperCase();
        const comprobarMayusSegNombre = segundoNombre[0] == segundoNombre[0].toUpperCase();
        if (comprobarMayusPrimNombre && comprobarMayusSegNombre) {
            console.log('el nombre de 2 es valido');
        } else { console.log('no valido el nombre de 2'); }

    }


    // (comprobarMayusPrimNombre && comprobarMayusSegNombre && comprobarMayusPrimerApe &&
    //     comprobarMayusSegundoApe && lenArr <= 4) ? console.log('el nombre es valido'): console.log('no valido');


};

// esNombreValido(8);

// EJERCICIO del examen de kavak
const grid = ['..##', '#.##', '#...'];
const maxTime = 5;

function reachTheEnd(grid, maxTime) {
    if (grid.length <= 500 && grid.length >= 1 && maxTime <= 10 ** 6 && maxTime >= 0) {
        let suma = 0;
        let gridString = grid.join('');
        for (let i in gridString) {
            if (gridString[i] == '.') {
                suma = suma + 1;
            }
            // const arrTermino = grid[i].split('');
            // // console.log(arrTermino);
            // const arrayFiltradoPorPuntos = arrTermino.filter((terminoArrTermino) => terminoArrTermino == '.');
            // suma = suma + arrayFiltradoPorPuntos.length;
        }
        // console.log(suma);
        if (suma > maxTime) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    } else { console.log('no se están cumpliendo las restricciones'); }
}

// reachTheEnd(grid, maxTime);