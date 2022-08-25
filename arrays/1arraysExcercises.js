{ // 1.-Create a function that concatenates n input arrays, where n is variable.
    const concat = (...arrOfArrays) => { //ejemplo de rest, recuerda que cuando usas esta notación el operador rest
        // puede recibir n argumentos, y los mete todos dentro de un array
        if (arrOfArrays.length == 0) return console.log('ingresa algo');
        for (let array of arrOfArrays) {
            if (!(array instanceof Array)) {
                const elemnetosNoValidos = arrOfArrays.filter((value) => !(value instanceof Array));
                if (elemnetosNoValidos.length == 1) {
                    return console.log(`sólo se aceptan arrays como argumentos, e ingresaste el 
             siguiente elemento valido: ${elemnetosNoValidos}`);
                }
                return console.log(`sólo se aceptan arrays como argumentos, e ingresaste
            los siguientes argumentos no validos: ${elemnetosNoValidos}`);
            }
        }
        const arrConcat = [].concat(...arrOfArrays);
        console.log(`El array con los arrays concatenados resultante es: [${arrConcat}]`);
    };
    // concat(1, 2, 3, [4, 5], [6, 7]);
}

{ //2.- Check if One Array can be Nested in Another  url excersise:https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
    // Create a function that returns true if the first array can be nested inside the second.

    // arr1 can be nested inside arr2 if:

    // arr1's min is greater than arr2's min.
    // arr1's max is less than arr2's max.
    // Ejemplos de uso de las funicones max y min del objeto Math:

    // console.log(Math.max(1, 2, 3)); //esto funciona correctamente
    // sin embrgo al pasarle un Array, no te encuentra el max, devolviendo un NAN
    // por lo que se arregla con una desestructuración:
    const arr = [8, 3, 3, 15, 1, 6, 9];

    // el siguiente arreglo lo creé sólo para recordar cómo CONCATENAR arrays con destructuración
    // const arr2 = [6, 7, 8, 9, 10];
    // console.log([...arr, ...arr2]);

    const maxArr = Math.max(...arr); //al aplicar este destructuring lo que pasa es que el arr lo convierte en 1 2 3 4 5 6
    const minArr = Math.min(...arr);
    // console.log(maxArr, minArr);

    // ahora me cuestiono, ¿Cómo le harías para obtener el max de un Array, sin usar 
    // esta función max, y análogamente para el min?
    // Esto es la maqueta de lo que inicialmente estba haciendo, pero sentia que algo 
    // me sobraba, al parecer ya jala BiquadFilterNode, pero no usaba para nada el arrmax

    const findMaxIntentoInicial = (array) => {
        // let arrMax = [];
        // for (let i in array) {
        //     if (array[parseInt(i) + 1] > array[i]) {
        //         // arrMax.push(array[parseInt(i) + 1]);
        //         arrMax.splice(0, 1, array[parseInt(i) + 1]);
        //     }
        // }
        // console.log(arrMax);
        // let elementoInicial = array[array.length - 1];
        let elementoInicial = array[0];

        // console.log(elementoInicial);
        // const arrMax = [];
        for (let i of array) {
            if (elementoInicial > i) {
                arrMax.splice(0, 1, elementoInicial);
                // continue;
            } else elementoInicial = i;
        }
        console.log(elementoInicial);

    };

    // para despejarme un poco lo  intenté hacer ahora en encontrar el mínimo, y me basé en lo
    // que vi en la url:
    // https://www.delftstack.com/es/howto/javascript/javascript-max-of-array/#:~:text=la%20variable%20m%C3%ADnimo%20.-,Encuentre%20el%20valor%20m%C3%A1ximo%20de%20una%20matriz%20usando%20la%20funci%C3%B3n,max()%20en%20JavaScript.
    const findMin = (array) => {
        let min = array[array.length - 1];
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        // console.log min);
        return min;
    };
    // findMin([1, 1, 1, 0, 2, 3, 4]);
    // y aquí volví a hacer el de máximo , ya con las ideas más ordenadas, y esta vez
    // ademas me propuse mejorar el código, hacer lo mismo, pero con menos líneas de código, resultando:

    const findMax = (array) => {
        max = array[0];
        array.forEach(element => (element > max) ? max = element : max = max);
        return max;
        // console.log(max);
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] > maximo) {
        //         maximo = array[i];
        //     }
        // } 
    };
    // findMax2([2, 3]);

    const canNest = (arr1, arr2) => {
        const maxArr1 = Math.max(...arr1);
        const maxArr2 = Math.max(...arr2);
        const minArr1 = Math.min(...arr1);
        const minArr2 = Math.min(...arr2);
        if (maxArr1 < maxArr2 && minArr1 > minArr2) {
            console.log(true);
        } else console.log(false);
    };
    // canNest([3, 1], [4, 0]);
    // canNest([9, 9, 8], [8, 9]);
    // canNest([1, 2, 3, 4], [2, 3]);

}

{ //3.- Create a function which returns the number of true values there are in an array.
    function countTrue(arr) {
        const contadorTrue = (value) => value == true;
        truesArray = arr.filter(contadorTrue);
        return (truesArray.length);
    }
}

{ //4.-Función para contar cuantas veces aparece un elemento en un array
    // se me ocurrio ja

    const count = (terminoBuscar, array) => {
        arrayContador = array.filter((value) => value == terminoBuscar);
        console.log(`El valor ${terminoBuscar} aparece ${arrayContador.length} veces en el array ingresado`);
    };

    // count(8, [3, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8]);
}

{ //5.- Array of Multiples
    // Create a function that takes two numbers as arguments (num, length) and returns an array
    // of multiples of num until the array length reaches length.
    // URL: https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
    // examples:
    // arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
    // arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
    // arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
    const arrayOfMultiples = (num, lonArr) => {
        let num_inicio = 7;
        arr = [];
        while (arr.length < lonArr) {
            for (i = 1; i <= lonArr; i++) {
                num_inicio = num * i;
                arr.push(num_inicio);
            }
        }
        // console.log(arr);
        return arr;
    };
    console.log(arrayOfMultiples(17, 6));
}

// 6.- Find the Smallest and Biggest Numbers
//Create a function that takes an array of numbers and return both
//the minimum and maximum numbers, in that order.
//FUENTE: https: //edabit.com/challenge/Q3n42rEWanZSTmsJm
function minMax(arr) {
    min = Math.min(...arr)
    max = Math.max(...arr)
    return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5]));