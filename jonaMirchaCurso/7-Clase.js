const elevarCuadrado = (array) => {
    const elevarCuadrado = value => value ** 2; //función de callback
    const arrayAlCuadrado = array.map(elevarCuadrado);
    console.log(arrayAlCuadrado);
};

// elevarCuadrado([1, 4, 5]);

const arrMaxMin = (arr) => {
    arrSort = arr.sort(); // sort ordena los números de menor a mayor
    const ultimoIndice = arrSort.length - 1;
    const arrMaxMin = [arrSort[ultimoIndice], arrSort[0]];
    console.log(arrMaxMin);
};

// arrMaxMin([1, 4, 5, 99, -60]);

// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresEImpares = (array) => {
    for (let i in array) {
        if (typeof(array[i]) != 'number') {
            return console.log('un elemento del array que ingresaste no es un número');
        }
    }
    // const arrayImpares = [];
    // const arrayPares = [];
    // for (const i in array) {
    //     if (array[i] % 2 == 0) {
    //         arrayPares.push(array[i]);
    //     } else arrayImpares.push(array[i]);
    // }

    const arrayPares = array.filter(value => value % 2 == 0);
    const arrayImpares = array.filter(value => value % 2 != 0);
    console.log({
        pares: arrayPares,
        impares: arrayImpares
    });
};

paresEImpares([1, '2', 4, 5, 6, 7, 8, 9, 0]);