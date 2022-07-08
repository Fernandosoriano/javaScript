// let aleatorio = Math.random();
// console.log(aleatorio);

// function aleatorio(inferior, superior) {
//     let numPosibilidades = superior - inferior;
//     let aleatorio = Math.random() * (numPosibilidades + 1);
//     aleatorio = Math.floor(aleatorio);
//     console.log(inferior + aleatorio);
// }

const generarAleatorioEnRango = (inferior, superior) => {
    const numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * (numPosibilidades + 1); // se le suma uno para que cuando
    //la diferencia sea 1, por ejemplo 1 y 2, no arroje siempre 1, sino también incluya 2,
    // esta es una observación que yo noté, no lo explican en el código.
    aleatorio = Math.floor(aleatorio);
    console.log(inferior + aleatorio);

};

// generarAleatorioEnRango(50, 51);

const esCapicua = (numero) => {
    if (!numero) return console.log('ingresa num');
    const numeroString = numero.toString();
    const numeroStringReverse = numeroString.split('').reverse('').join('');
    (numeroString === numeroStringReverse) ? console.log(`${numero} sí es capicúa`):
        console.log(`${numero} no es capicúa`);
    // if (numeroString === numeroStringReverse) console.log(`${numero} sí es capicúa`);
    // else console.log(`${numero} no es capicúa`);

};


// esCapicua(2002);

const factorial = (numero = undefined) => {

    if (numero === 0) console.log('el factorial de 0 es 1');
    if (numero === undefined) return console.log('debes ingresar un número');
    if (typeof(numero) !== 'number') return console.log('el argumento que pasa no es un número');
    if (Math.sign(numero) === -1) return console.log('no se puede sacar factorial de números negativos');
    // el Math.sign te devuelve el signo del número que le pasas como entrada 1 si es positivo, -1 sino 
    if (numero != 0) {
        let fact = 1;
        for (i = 1; i <= numero; i++) {
            fact = fact * i;
            // console.log(i, fact);

        }
        console.log(`El factiorial de ${numero} es ${fact}`);
    }
};

factorial(5);