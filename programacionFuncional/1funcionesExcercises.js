{ // 1.-Create a function that takes a country's name and its area as arguments and returns the area of the country's 
    // proportion of the total world's landmass.

    const areaOfCountry = (name, area) => {
        const razonAreas = area / 148940000;
        console.log((razonAreas * 100).toFixed(2));
    };

    // areaOfCountry("Russia", 17098242);
}

{ // 2.-Write a function that returns an anonymous function, which transforms its input by adding a particular
    //  suffix at the end.
    // Examples:
    // add_ly = add_suffix("ly")

    // add_ly("hopeless") ➞ "hopelessly"
    // add_ly("total") ➞ "totally"

    // add_less = add_suffix("less")

    // add_less("fear") ➞ "fearless"
    // add_less("ruth") ➞ "ruthless"

    const add_suffix = (primerPalabra) => {
        return (segundaPalabra) => {
            return segundaPalabra + primerPalabra;
        };
    };
    add_ly = add_suffix("ly");
    // console.log(add_ly("hopeless"));
}

{ // 3.- Create a function that always returns true for every item in a given array. However, if an
    //  element is the word "flick", switch to always returning the opposite boolean value.Examples

    const flickSwitch = (arr) => {
        let arr2 = [];
        let valorInicialSwitch = true;
        for (let i of arr) {
            if (i != 'flick') {
                arr2.push(valorInicialSwitch);
            } else {
                valorInicialSwitch = !valorInicialSwitch;
                arr2.push(valorInicialSwitch);
            }
        }
        // console.log(arr2);
    };

    // flickSwitch([]);
    // flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']);
    //  [false, true, false, true, false])

    // Comentarios: aprendí que  primero debo tener bien claro qué es lo que quiero hacer,
    // porque yo en mente estaba resolviendo otra cosa, pensaba que cada que apareciera
    // la palabra flick debia hacer que de ese elemento en adelante todos fueran false, pero no es así,
    // era que cada que apareciera flick, es una especie de switch que cambia el valor de los valores al contrario
    // del que viene trayendose

    // a continuación desarollé el que yo creía que estaRepetido, a como lo 
    // habia entendido inicialmente:

    const flickSwitchQueCreia = (arr) => {
        arr2 = [];
        contador = 0;
        for (let i of arr) {
            contador++;
            if (i != 'flick') {
                arr2.push(i.toString());
            } else {
                break;
            }
        }
        for (let j = contador - 1; j < arr.length; j++) {
            arr[j] = 'cambio';
            // console.log(arr[j]);
            arr2.push(arr[j]);
        }
        // console.log(arr2, contador);
    };

    // flickSwitchQueCreia([false, false, "flick", "sheep", "flick", 3]);

}

{ // 4.-Please generate the Triangular Number Sequence: 1, 3, 6, 10, 15,  que se le pase como argumento 
    // la cantidad de números que quieres que se generen

    const trinagularNumberSecuence = (numeroElemetosSerie, miemborEspecifico) => {
        if (miemborEspecifico > numeroElemetosSerie) {
            return console.log(`el meimbro específico que quieres saber, excede 
         el numero de elemetos de la serie que metiste`);
        }
        let arrTriangularNumbers = [];
        let serieMiembro = 0;
        let sumando = 0;
        for (let i = 0; i < numeroElemetosSerie; i++) {
            sumando++;
            serieMiembro = serieMiembro + sumando;
            arrTriangularNumbers.push(serieMiembro);
            if (numeroElemetosSerie > 11) { continue; }
            console.log(serieMiembro);
        }
        console.log(`el triángulo número ${miemborEspecifico}  tiene ${arrTriangularNumbers[miemborEspecifico-1]} puntos`);
    };
    // trinagularNumberSecuence(12, 6);
}


{ //5.-Create a function that takes a number as an argument. Add up all the numbers from 1 to the number 
    // you passed to the function. For example, if the input is 4 then your
    // function should return 10 because 1 + 2 + 3 + 4 = 10.

    const addUpp = (num) => {
        let suma = 0;
        const numbersPorSumar = [];
        while (num > 0) {
            numbersPorSumar.push(num);
            num = num - 1;
        }
        // const sumarValues = (value) => suma = suma + value; descomenta esta línea
        //  si quieres reutilizar código con una función callback

        numbersPorSumar.forEach((value) => suma = suma + value);
        // console.log(suma);
        return (suma);
    };
    // addUpp(4);
}


{ // 6.-
    const whichIsLarger = (f, g) => {
        (f() > g()) ? console.log("f"): (g() > f()) ? console.log("g") : console.log("neither");
    };

    // whichIsLarger(() => 5, () => 10);
    // whichIsLarger(() => 25, () => 25):
    // whichIsLarger(() => 505050, () => 5050);
}

{ //7.-Scope de una función
    // prueba para ver el scope de las variables en js:
    const scopePrueba = () => {
        const nombre = "Fernando";
        const scopePrueba2 = () => {
            const nombreInterno = "FernandoInterior";
            console.log(nombre, nombreInterno);
        };
        scopePrueba2();
        console.log(nombre, nombreInterno);
    };
    // Notas: desde el interior del bloque de una función, puedes acceder a 
    // todas las variables que se encuentren fuera del bloque, pero al revés no,
    // es decir que las variables que se encuentren definidas dentro de un 
    // bloque no puedes usarlas fuera del mismo

    // scopePrueba();
}

{ //8.- What's Hiding Amongst the Crowd?
    // A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function
    //  to detect what the word is, knowing the following rules:
    // The wanted word is in lowercase.The crowd of letters is all in uppercase.
    // Note that the word will be spread out amongst the random letters, but their
    // letters remain in the same order.
    // URL: https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
    // Examples
    // detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

    // detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

    // detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

    const detectWord = (word = "none") => {
        if (word == "none") { return console.log("ingrese una cadena"); }
        wordArr = word.split("");
        for (let i of wordArr) {
            if (!isNaN(parseInt(i))) {
                return console.log(`Sólo se aceptan letras en la cadena, ud ingresó  ${i}`);
            }
        }
        wordArrFilter = wordArr.filter(letter => letter == letter.toLowerCase());
        wordDetected = wordArrFilter.join("");
        console.log(wordDetected);

    };
    // detectWord("UfUNFYGeFYFYGrNUH");
    // detectWord("bEEFGBuFBRrHgUHlNFYaYr")
    // detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
}

{ //9.-Number of Squares in an N*N Grid
    // Create a function that calculates the number of different squares in 
    // an n * n square grid. Check the Resources tab.
    const numberSquares = (numero) => {
        let suma = 0;
        for (let i = 1; i <= numero; i++) {
            suma = suma + i ** 2;
        }
        return `El número de cuadrados en una cuadriculad de tamaño ${numero} x ${numero} es ${suma}`;
    };
    // Examples
    // numberSquares(4) ➞ 30
    // numberSquares(5) ➞ 55
    console.log(numberSquares(1));
}