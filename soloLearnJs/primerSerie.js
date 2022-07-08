// 1.- function contact(name, number) {
//     this.name = name;
//     this.number = number;

//     this.print = function() { console.log(`${name}: ${number}`); };
// }

class contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        this.print = function() { console.log(`${name}: ${number}`); };
    }

}

var a = new contact('David', 12345);
var b = new contact('Amy', 987654321);

// a.print();
// b.print();

// 2.- ===================================================================================================

const fibonacci = (n) => {
    // el siguiente código comentado  salio de https://www.adaweb.es/serie-de-fibonacci-en-javascript/

    // var limit = 10;
    // var fibo = [0,1];

    // for(i=2; i <= limit; i++){
    // 	fibo.push(fibo[i-1] + fibo[i-2]);
    // 	document.write(fibo[i]+"<br/>");	
    // } 

    const numeroRepeticiones = 'f'.repeat(n);
    a = 0;
    b = 1;
    const numerosFibo = [];
    for (let i in numeroRepeticiones) {
        numerosFibo.push(a);

        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
    console.log('un numero fibo:' + ' ' + numerosFibo[8]);

};
// fibonacci(10);

// 3.- ==============================================================================================================================
// function main(profundidad) {
//     let stepsByDay = [7];
//     for (let i = 0;; i++) {
//         if (i % 2 == 0) {
//             noche = stepsByDay[i] - 2;
//             stepsByDay.push(noche);
//         } else {
//             dia = stepsByDay[i] + 7;
//             stepsByDay.push(dia);
//         }
//         // console.log(stepsByDay[i]);
//     }
//     console.log(stepsByDay);

// }
// main(12);

// console.log(0 % 2)
function main(depth) {
    let climb = 7;
    let slip = 2;
    let workdoneByDay = 0;
    for (day = 1;; day++) {
        workdoneByDay = workdoneByDay + climb;
        console.log(` day: ${day}, workdoneByDay: ${workdoneByDay}, depth: ${depth}`);
        if (workdoneByDay >= depth) { //el primer número que cumpla esto , y se corta el bucle, yo pensabe que como hay muchos que van a ser mayores seria un bucle infinito, pero no
            break;
        }
        workdoneByDay = workdoneByDay - slip;
    }
    console.log(day);
}
// main(41);
// 4.-==========================================================================================================================

function factorial(number) {
    let factorial = 1;
    let multiplicador = 1;
    while (factorial != number) {
        factorial = factorial + 1;
        multiplicador = multiplicador * factorial;
    }
    console.log(multiplicador);
}

// factorial(4);
// 5.- =========================================================================================================================
class person {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    changeName(name) {
        this.name = name;
    }
}

let pimerInstancia = new person('Gaby', 54);
// console.log(pimerInstancia);

// pimerInstancia.changeName('ramona');
// console.log(pimerInstancia.name);

class perro {
    constructor(nombre, color) {
        this.nombre = nombre;
        // this.edad = edad;
        this.color = color;
    }
    ladrar(anioActual) {
        let edad = anioActual - 2014;
        console.log(`el ${this.nombre} dice Wooowla, tengo ${edad} años, y mi pelaje es de color ${this.color}`);

    }
}
chow = new perro('chow chow', 'negro');
// console.log(chow);
//6.- ======================================================================================================================
// console.log(chow.ladrar(2021));
arr1 = new Array(1, 0, 2); //con esto generas un array en JS
arr2 = new Array(4, 2, 0);
arr = arr2.concat(arr1);
// console.log(arr);
// console.log(arr[arr[2]]);
// console.log(NaN == NaN);
// ===========================================================================================================================

// 7.-You are making a text encryptor. It should take multiple words and output a combined version,
// where each word is separated by a dollar sign $.
// For example, for the words "hello", "how", "are", "you", 
// the output should be "$hello$how$are$you$".


// 8.-=============================================================================================================
// Pythagoras theorem says: In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides. 

// Write a program that takes lengths of triangle sides as inputs, and output whether our triangle is right-angled or not. If the triangle is right-angled, the program should output "Right-angled", and "Not right-angled" if it's not. 

// Sample Input 
// 3 
// 4 
// 7 

// Sample Output 
// Not right-angled=============

// [Take the 3rd input (side3 variable in sample code) as the longest side, which will represent
// the hypotenuse if the triangle is right-angled.]

const esTrianguloRectangulo = (cateto1, cateto2, hipotenusa) => {
    const sumaCuadrados = cateto1 ** 2 + cateto2 ** 2;
    (sumaCuadrados === hipotenusa ** 2) ? console.log("es rectángulo"): console.log("no es rectángulo");
    // if (sumaCuadrados === hipotenusa ** 2) {
    //     console.log("es rectángulo");
    // } else console.log("no es rectángulo");
};

esTrianguloRectangulo(3, 4, 5);