//El spread operator se usa para expandir, por ejemplo argumentos a una función
//Estos argumentos los pasa generalmente en un array, y pueden ser n
//Por ejemplo myFunction(...[ArrayQUeContieneArgumentos])
//Puedes usar el spread operator para concatenar arrays, hacer una copia de un array, 
//y no modificar el original, así : [...array],  de manera similar para un objeto,
//te permite combinar objetos, y del mismo, modo también puedes hacer 
// copias  así: {...object}
//leí que es como hacer lo contrario al REST, te permite pasar una cantidad grande 
//de parametros a una función, estos argumentos los puedes pasar en un array
//para eso usas tres puntos en la función a la que le vas a pasar todos estos
//argumentos, y con el rest que igual son tres puntos, lees todos los arguementos
//los cuales almacenará nuevamente en un array, al que le  puedes aplicar
//todas las propiedades de uno de éstos, ya sea metodos o desestructuración
//esto te servirá para acceder a los valores de los parametros facilmente.

{ // 1.-REST se usa en los argumentos de una función (Ejercicio de jona mircha)
    const suma = (a, b, ...c) => { //los parametros rest te sirve para cuando no  sabes cuántos 
        // argumentos vas a recibir en tu función, capacidad de tener parametros infinitos
        let resultado = a + b;
        const sumaIn = (n) => { resultado += n; };
        c.forEach(sumaIn);
        return resultado;
    };

    // console.log(suma(1, 2, 4, 5, 4));
}

{ // 2.-concatenar arrays
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    const arr3 = [...arr1, ...arr2]; //junta ambos array en uno sólo
    // console.log(arr3);
}

{ // 3.-============ REST falcon Masters ===============
    const mostrarDatosSinRest = (nombre, edad, color) => {
        console.log(nombre, edad, color);
    };
    // mostrarDatosSinRest('Fernando', 28, 'blanco')

    //para evitar tener que escribir todos los argumentos
    //puedes ponerlo así:
    const mostrarDatosConRest = (...datos) => {
        console.log(datos);
    };
    // mostrarDatosConRest('Fernando2', 282, 'blanco2')
}

{ // 4.- SPREAD (lo contrario a rest) Y Rest en uso juntos
    const mostrarDatosConRestYSpread = (...datos) => { // con  el parámetro REST puedes recibir todos los datos
        console.log(datos);
    };
    const arregloDatos = ['fernando', 'fersoriano@ciencias.unam.mx', 'México'];

    //mostrarDatosConRestYSpread(...arregloDatos);

    // con el operador SPREAD puedes mandar todos los datos a partir de un array por ejemplo 
    // para evitar tener que mandar toodos los parametrso separados por comma a la función
    // en este caso ves cómo puedes mandar los params pásandole un array
}