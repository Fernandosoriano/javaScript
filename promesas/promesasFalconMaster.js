// FALCON MASTER

const promesa = new Promise((resolve, reject) => {
    //acción que se eejcutará
    // resolve();
    // reject();
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve('la operación tuvo éxito');
        } else {
            reject('la operación no tuvo éxito');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
});

promesa.catch((mensajeFracaso) => {
    console.log(mensajeFracaso);
});