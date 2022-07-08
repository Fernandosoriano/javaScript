{ // 1.- experimentaré el uso de ASYN AWAIT
    // url https://www.youtube.com/watch?v=rKK1q7nFt7M

    const datos = [{
        nombre: "Fernando",
        apellido: "Valle",
        ocupacion: "físico programador"
    }, {
        nombre: "Valeria",
        apellido: "Valle",
        ocupacion: "Gerente Marketing digital"
    }, {
        nombre: "Gabriela",
        apellido: "Soriano",
        ocupacion: "ama de casa y conserje"
    }];
    // datos = [];

    // el siguiente console.log lo hace sin ningún tema, todo es síncrono, pero y si 
    // metemos asincrnia...
    const getDatosSincrono = () => {
        return datos;
    };
    const getDatosAsincrono = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(datos); }, 1500);
            if (datos.length == 0) {
                reject("no hay datos que mostrar");
            }
        });
    };
    const fetchingData = async() => {
        try {
            const nombre = await getDatosAsincrono();
            console.log(nombre);
        } catch (err) {
            console.log(err);
        }
    };
    // console.log(getDatosSincrono());
    // fetchingData();
}


{ //2.-Ejercicio que hice como prueba para ver cómo funciona la
    // creación de una promesa sin un return, esto porque noté 
    // que en un desarrollo que hice en gentera no puse el return y me dio 
    // curiosidad ve si funicona igual que el ejemplo de Carlos Azaustre

    const pruebaPromesa = () => //quite el return, lo deje a como noté que hice el
        //el desarrollo en el proyecto de angular de gentera
        // con la función que convierte file a b64
        new Promise((resolve, reject) => {
            varBool = false;
            if (varBool) {
                setTimeout(() => { resolve("Fernando"); }, 1500);
            } else {
                reject("ocurrio un error");
            }
        });
    const fetchingData2 = async() => {
        try {
            nombre = await (pruebaPromesa());
            console.log(nombre);
        } catch (err) { console.log(err); }
    };
    // pruebaPromesa().then((data) => { console.log(data); }).catch((err) => { console.log(err); })
    // pruebaPromesa().catch((msg) => { console.log(msg); }) pensé que iba 
    // separado el cath, pero va junto como se ve en la línea 233

    // fetchingData2();

}