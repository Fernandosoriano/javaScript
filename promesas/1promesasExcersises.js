{ //1.- otro ejercicio de practica para que se me  quede al menos la sintaxis de una 
    // promise
    const msg1 = "mensaje con asincronia que imprime undefined, porque no se trata con una promise";
    const msg2 = "mensaje sin asincronia";
    const msg3 = "mensaje impreso a los 1.5 segundos, tratado con asíncronia con una promise";
    const estadoServerSimulado = true;

    const dataAsincrona = () => {
        // return msg2;

        // setTimeout(() => {
        //     return msg1;
        // }, 1500);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (estadoServerSimulado) {
                    resolve(msg3);
                }
                reject("ocurrió un problema en el servidor");
            }, 1500);
        });
    };
    // console.log(dataAsincrona());

    const traerdata = async() => {
        try {
            dataFetch = await dataAsincrona();
            console.log(dataFetch);
        } catch (err) {
            console.log(err);
        }
    };
    traerdata();
}

{ //2.- Create a simple promise and pass the resolve function a string value 
    // of your choice. Use the setTimeout function as your asynchronous operation. 
    // Your setTimeout() function should not exceed 1000ms. Store the promise inside
    //  a variable named promise.
    // LINK: https://edabit.com/challenge/8kTQqoWYQXRsKuYEf
    let promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve("este es un mensaje que aparece despues de 8s")
            }, 8000)
        }
    );
    const imprime = async() => {
        msg = await promise;
        return msg;
    }
    imprime()
};