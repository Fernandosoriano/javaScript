const Personajes = [
    { id: 1, nombre: 'Jaime', familia: 'Lannister', edad: 34 },
    { id: 2, nombre: 'Arya', familia: 'Stark', edad: 11 },
    { id: 3, nombre: 'Oberyn', familia: 'Martell', edad: 41 },
    { id: 4, nombre: 'Sansa', familia: 'Stark', edad: 13 },
    { id: 5, nombre: 'John', familia: 'Snow', edad: 14 },
    { id: 6, nombre: 'Theon', familia: 'Greyjoy', edad: 21 },
    { id: 7, nombre: 'Daenerys', familia: 'Targaryen', edad: 17 },
    { id: 8, nombre: 'Cersei', familia: 'Lannister', edad: 34 }
];
// sin usar método filter se haria así:
const arrLannister1 = [];
for (let i in Personajes) {
    if (Personajes[i].familia === 'Lannister') {
        arrLannister1.push(Personajes[i]);
    }
}
// console.log(arrLannister1);

//                                            ****1FILTER*****
// te crea un nuevo array que contendrá todos los elelementos que cumplan la condición de la función que 
// pasas como calback
const arrLannister2 = Personajes.filter((personaje) => personaje.familia === 'Lannister');
// console.log(arrLannister2)

//========== puedes hacer código reutilizable, a continuación creamos la función callback como una constante
// y después podemos pasarla como argumento del método filter:=======================

const esLannister = personaje => personaje.familia === 'Lannister'; // función calback
const arrLannister3 = Personajes.filter(esLannister);
// console.log(arrLannister3);
//==========================================================================================================================


//==== el método filter recibe tres params, value, índice y array, a continuación se muestra cómo se usan estos 
// params en un ejemplo que elimina los elementos repetidos ===========
const numbers = [1, 2, 3, 1, 2, 3, 4, 5, 6];

const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
    // el  indexOf devuelve el índice del pimer valor (que pasas como param) que encuentre en el array

});

console.log(nums);
// a continuación se hace lo mismo , pero con  código que puede ser reutilizable==
const estaRepetido = (value, index, arr) => {
    return arr.indexOf(value) === index;
};
const nums2 = numbers.filter(estaRepetido);
// console.log(nums2);


//                                                 ***2MAP***

// const nombrePersonajes1 = Personajes.map((personaje) => `${personaje.nombre}  ${personaje.edad}`)
// si quieres regresar un objeto o notación JSON, haces esto:
const nombrePersonajes2 = Personajes.map((personaje) => ({ nombre: personaje.nombre, edad: personaje.edad }));
//simplificando la línea anterio con desestructración
const nombrePersonajesDes = Personajes.map(({ nombre, edad }) => ({ nombre, edad }));

// console.log(nombrePersonajesDes);

// Lo anterior se puede separar, usando progrmación funcional y poder reutilizar código

const numeros = [1, 2, 3, 4, 5, 6];

const doble = (numero) => {
    return numero * 2;
};

const dobleDeNumeros = numeros.map(doble);

// console.log(dobleDeNumeros);

//                                              ********3FLAT*******

// te sirve para poner plano (notación json sencilla)
// un array cuya estructura puede llegar a ser muy
// complicada, como el que vemos a continuación

const personas = [
    { nombre: 'María', edad: 12 },
    { nombre: 'Marlene', edad: 13 },
    { nombre: 'Jocelyn C', edad: 14 },
    [
        { nombre: 'Serch', edad: 15 },
        { nombre: 'Sebas', edad: 16 },
        [{ nombre: 'Raul', edad: 12 },
            [{ nombre: 'Vale', edad: 12 }]
        ],
    ],
];
const personasFlat = personas.flat(Infinity);

// console.log(personasFlat);

//****4FOREACH****
// No te crea un array nuevo como el map y el filter
// la función de callback recibe los mismos parametros que
// los otrso dós métodos: value, index y array 

// Personajes.forEach((personaje) => console.log(personaje.nombre));

let miembrosFamilia = {};

Personajes.forEach((personaje) => {
    if (miembrosFamilia[personaje.familia]) {
        miembrosFamilia[personaje.familia]++;

    } else {
        miembrosFamilia[personaje.familia] = 1;
    }
});

// console.log(miembrosFamilia);


//                                     *** 5FIND***
//devuelve true o false al igual que filter, y en caso de ser
// true, para y devuelve ese valor

const buscarArya = ({ nombre }) => nombre === 'Arya';

const arya = Personajes.find(buscarArya);

// console.log('arya', arya);

const buscarLannister = ({ familia }) => familia === 'Lannister';
const lannister = Personajes.find(buscarLannister);
// console.log(lannister);

// la diferencia entre filter y find es que el find devuelve
// el primer elemento  que cumpla la condición, y filter crea un array con 
// todos los elementos que cumplen la condición dada


//    *** 6REDUCE***

const numeros2 = [1, 1, 1];

const total = numeros2.reduce(suma, 0); //cuando ejecutamos reduce lleva un callback y un inicial value que es el valor del acumulador, desde el valor que quieres que comience a contar

function suma(acumulador, valorActual, index, arr) {
    return acumulador + valorActual;

}
// console.log(total);

const compararEdad = (acumulador, personaje) => {
    if (acumulador > personaje.edad) {
        return acumulador;

    } else {
        return personaje.edad;
    }
};
const edadMayor = Personajes.reduce(compararEdad);
// console.log(edadMayor);

//////////////////Carlos azaustre////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
const posts = [{
        id: 1,
        title: 'Mi primer post',
        image: 'https://img.com/1',
        tags: ['javascript', 'webdevelopment'],

    },
    {
        id: 2,
        title: 'Mi experiencia con React',
        image: 'https://img.com/2',
        tags: ['javascript', 'webdevelopment', 'react'],

    },
    {
        id: 3,
        title: 'Por qué dejé Angular',
        image: 'https://img.com/3',
        tags: ['javascript', 'webdevelopment', 'angular'],

    }
];

//FIND
const Find = posts.find(post => post.title === 'Por qué dejé Angular');
//SOME
const FindSome = posts.some(post => post.id === 1);
// puedes convinar el some con includes:
const FindSomeIncludes = posts.some(post => post.tags.includes('react') === 1);
//EVERY
const every = posts.every(post => post.tags.includes('javascript'));
//MAP
const arrTitulos = posts.map(post => post.title);
//FILTER
const arrrFilter = posts.filter(post => post.tags.includes('angular'));

//REDUCE

const arrReduce = posts.reduce((alltags, post) => { // alltags  es el acumulador
    return Array.from(new Set([...alltags, ...post.tags]));
    //SET es una estructura que no tiene elementos repetidos
    //Puedes generar un nuevo array com Array.form
}, []);

// console.log(arrReduce);