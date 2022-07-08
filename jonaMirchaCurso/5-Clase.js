const conversorBasesDosDiez = (numero = undefined, base = undefined) => {
    if (!numero || !base) return console.log('debes ingresar el número y la base para hacer la conversión');
    if (!Number.isInteger(numero)) return console.log('sólo se aceptan números enteros como argumento');
    if (typeof(numero) == 'string') return console.log('sólo se aceptan números enteros como argumento');
    if (base == 2) {
        const numeroCadena = numero.toString();
        const numeroArr = numeroCadena.split('').reverse();
        const esBinario = numeroArr.every(value => parseInt(value) == 1 && parseInt(value) == 0);
        if (esBinario) {
            const arrSum = [];
            for (let i = 0; i < numeroArr.length; i++) {
                // console.log(parseInt(numeroArr[i]) * (2 ** i))
                arrSum.push((numeroArr[i]) * (2 ** i));
            }
            // console.log(arrSum);
            let suma = 0;
            for (let i = 0; i < arrSum.length; i++) {
                suma = suma + arrSum[i];
            }
            console.log(`El numero binario: ${numero} en decimal es igual a: ${suma}`);
        } else { console.log(`El número ${numero} no es binario`); }
    }
    if (base == 10) {
        // const binario = numero.toString(2)  con esta línea de código queda la conversion a binario
        // pero quise hacerlo a mano:

        const binaryArr = [];
        const numeros = []; // este arreglo lo hice para poder acceder al primer elemento
        // que es el número original que se recibe como argumento ya que
        // depués del while  numero tenía el valor de la última iteración
        // y no sabía cómo accceder al valor original para imprimir mensage en consola
        while (numero > 1) {
            // console.log(numero, Math.floor(numero % 2));
            numeros.push(numero);
            binaryArr.push(Math.floor(numero % 2));
            numero = numero / 2;
        }
        const numeroBin = parseInt(binaryArr.reverse().join(''));
        console.log(`EL número binario: ${numeros[0]} en binario es: ${numeroBin}`);
    }
};

// conversorBasesDosDiez(10003, 10)


const calculaDescuento = (total = undefined, descuento = undefined) => {
    if (descuento <= 100) {
        if (!total || !descuento) return console.log('debes  ingresar total y descuento para calcular el precio final');
        if (typeof(total) != 'number' || typeof(descuento) != 'number') return console.log('sólo se aceptan números');
        if (Math.sign(total) == -1 || Math.sign(descuento) == -1) return console.log('sólo se admiten números positivos');
        const multiplica = total * descuento;
        const descuentoAaplicar = multiplica / 100;
        const precioFinal = total - descuentoAaplicar;
        console.log(`El precio que tienes que pagar con el descuento aplicado es de: ${precioFinal}`);
    } else console.log('no se puede calcular este porcentaje');
};

// calculaDescuento(200, 50)

// cumpleanos = new Date("December 17, 1995 03:24:00");
// cumpleanos = new Date(1995, 11, 17);
// cumpleanos = new Date(1995, 11, 17, 3, 24, 0);
const fecha = new Date(1984, 4, 23);
const fechaStr = fecha.toString();
const fechaArr = fechaStr.split(' ');
const añoAnterior = parseInt(fechaArr[3]);

const fechaActual = new Date();
const fechaActualStr = fechaActual.toString();
const fechaActualArr = fechaActualStr.split(' ');
const añoActual = parseInt(fechaActualArr[3]);


// console.log(añoActual - añoAnterior);


// calcularAños(new Date(1993, 3, 13))

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.log('No ingresaste la fecha');
    if (!(fecha instanceof Date)) return console.log('El valor que ingresaste no es una fecha valida');
    // con instance of puedo asegurame de que lo que  entre sea  sí y sólo sí un objeto de tipo date
    // ya que  si pongo sólo typeof, me regresa tipo object, pero el instanceOf sirve para aclarar el tipo de objeto que es
    else {
        const añoEntrada = parseInt(fecha.getFullYear()); // con getFullYear obtengo sólo el año de la fecha ingresada en este caso
        // const añoEntrada = parseInt(fecha.getFullYear());
        const fechaActual = new Date();
        const añoActual = parseInt(fechaActual.getFullYear());
        const añosTranscurridos = añoActual - añoEntrada;
        (Math.sign(añosTranscurridos) == -1) ? console.log(`faltan ${Math.abs(añosTranscurridos)} años para llegar al año ${fecha.getFullYear()}`):
            (Math.sign(añosTranscurridos) == 1) ?
            console.log(`han pasado ${añosTranscurridos} años desde el ${fecha.getFullYear()}`) :
            console.log(`Estamos en el año ${fecha.getFullYear()} `);
    }



};
calcularAnios(new Date(2021, 3, 13));

// const date = new Date(new Date(1993, 3, 13)).getTime(); me da el número en milisegundos que han transcurrido desde mi fecha de nacimeinto
// console.log(date);