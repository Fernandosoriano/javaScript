// Función que cuenta la cantidad de caracteres de una cadena
contarCaracteres = cadena => (!cadena) ? console.log('olvidaste poner una cadena') :
    console.log(`La longitud de la cadena es ${cadena.length}`);

// console.log(contarCaracteres("Hola Joc"));
//Función que recorta una cadena según el número pasado com oargumento
// console.log(contarCaracteres("Hola Mundo"));

const cortarCadena = (cadena, longitud) => {
    let cadenaRecortada = cadena.slice(0, longitud);
    return `la cadena recortada es: ${cadenaRecortada}`;
};
// console.log(cortarCadena("Hola Mundo", 3));

//Función que transforma una cadena en un array
const cadenaArray = (cadena, expReg) => cadena.split(expReg);

// console.log(cadenaArray('hola que tal', ' '));

//Función para repetir texto

const repetirCadena = (cadena, numRep) => cadena.repeat(numRep);

// console.log(repetirCadena('Hola Mundo ', 3));

// lo que pongo a continuación es para probar el operador ternario:

// const variableBool = true;
// const variableBool2 = false;

// (variableBool2) ? console.log('La variable que se está evaluando es true'): console.log('La variable que se está evaluando es false');



// function hola(n) {
//     console.log(`hola ${n}`);
//     // console.log('hola' + n);

// }

// hola('Peronelle')