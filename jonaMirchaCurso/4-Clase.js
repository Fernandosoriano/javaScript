const esPrimo = (numero) => {
    if (!numero) return console.log('debes ingresar un número entero');
    if (!Number.isInteger(numero)) return console.log('Sólo se aceptan números enteros positvos');
    if (Math.sign(numero) === -1) return console.log('El número no puede ser negativo');
    if (numero === 1) return console.log('El número no puede ser 1');
    if (numero === 0) return console.log('El número no puede ser 0');
    const arrPrim = [];
    for (i = 1; i < numero; i++) {
        if (numero % i == 0) arrPrim.push(i);
    }
    if (arrPrim.length == 1) console.log(`${numero} sí es un número primo`);
    else console.log(`${numero} no es un número primo`);
};
esPrimo(0);

const esparOimpar = (numero = undefined) => {
    if (!numero) return console.log('debes ingresar un número entero');
    if (!Number.isInteger(numero)) return console.log('Sólo se aceptan número enteros');
    if (numero % 2 == 0) console.log(`${numero} es un número par`);
    else console.log(`${numero} es impar`);
};
// esparOimpar();

const conversionEscala = (temperatura, escala) => {
    if (!temperatura || !escala) return console.log('debes ingresar los dos parametros, para poder hacer la conversión');
    if (typeof(temperatura) !== 'number') return console.log('la temperatura que pasaste no es un número');
    if (typeof(escala) !== 'string') return console.log('la escala debe ser una cadena');
    const escalaMinus = escala.toLowerCase();
    if (escalaMinus === 'c') {
        const escalaFah = (temperatura * 1.8) + 32;
        console.log(`la temperatura Celsius de ${temperatura} en grados Fahrenheit equivale a ${escalaFah} `);
    } else {
        const escalaCel = (temperatura - 32) * 5 / 9;
        console.log(`la temperatura Fahrenheit de ${temperatura} en grados Celsius equivale a ${escalaCel} `);

    }
};

// conversionEscala(32, 'c')