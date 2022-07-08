// const array1 = ['Sebastian', 'Bucio', 'Pacheco']
// const arrayToString = array1.join(' '); el join genera una cadena con los
// console.log(arrayToString);             elementos del array, en este caso devuelve:
// Sebastian Bucio Pacheco, separados , porque
//puse espacio en el argumento del join
const invertirCadena = cadena => (!cadena) ? console.log('No has ingresado la cadena') :
    cadena.split('').reverse().join('');


// console.log(invertirCadena('Fer'));

const contarPalabraEspecificada = (cadena, palabraParam) => {
    if (!cadena && !palabraParam) return console.log('la función espera dos paramétros, por favor ingresalos');
    if (!cadena || !palabraParam) return console.log('falta la cadena, por favor ingresala');
    const palabraParamFormateada = palabraParam.replace(/ /g, "").toLowerCase();
    // con este REPLACE elimino los espacios de la palabra que se quiere contar, con TOLOWERCASE evito confusión
    // entre mayúsculas y minúsculas
    // const cadenaArr = cadena.split(' ') aquí sólo creaba el array separando por espacios, pero habia problemas 
    // cuando se ponia  por ejemplo en el texto: "fer es feliz, porque es feliz" porque se generaba el array:
    //['fer', 'es', 'feliz,', 'porque', 'es', 'feliz'] y el feliz, no coincide con la palabra que se usa para
    // hacer el filter
    const cadenaArr = cadena.split(/[\s,.;]+/);
    //Poniendo el split de esta forma: split(/[\s,.;]+/) se arregla el problema , ya que  de este modo
    //se separa por espacios, y la lista de todos los caracteres que coloqques, en este ejemplo , . y ;
    //al parcer s es reservada para indicar que separe por espacios, si quieres separar por la letra s, 
    //debes poner split(/[\'s',.;]+/) indicando  que 's' es cadena
    const palabraRepetida = (palabra) => palabra.toLowerCase() === palabraParamFormateada; // esta es una función de
    // callback, que pasa como argumento al método filter
    const arrayConPalabrasRep = cadenaArr.filter(palabraRepetida);
    console.log(`La palabra ${palabraParamFormateada} aparece ${arrayConPalabrasRep.length} 
    veces en el texto que ingresaste`);
};

// contarPalabraEspecificada("norma gabriela es una persona muy feliz; pero a la vez es feliz. porque tiene un chow chow feliz y el chow chow es feliz por que tiene a fer que es feliz por que la nena es feliz y es feliz", "feliz");

const esPalindromo = cadena => {
    const cadenaFormateada = cadena.replace(/ /g, "").toLowerCase(); //este replace elimina todos los espacios de la cadena
    const cadenaReversa = cadena.replace(/ /g, "").split('').reverse().join('').toLowerCase();
    (cadenaFormateada === cadenaReversa) ? console.log(`${cadena} es palindromo`):
        console.log(`${cadena} no es un palindromo`);
};

// esPalindromo('a la gorda DROGALA');

const remplazarTexto = (cadena, remplazo) => {
    const cadenaMinuscu = cadena.toLowerCase();
    const remplazoMinuscu = remplazo.toLowerCase();
    console.log(cadenaMinuscu.replace(new RegExp(remplazoMinuscu, "g"), ""));
    // con el RegExp puedes pasar con una variable el 
    // caracter que quieres eliminar en una cadena
    // la g te indica que lo hace de manera global
};
remplazarTexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xYz");