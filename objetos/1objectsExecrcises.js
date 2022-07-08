{ //1.-Write a function that converts an object into an array, where each element represents a
    //  key-value pair in the form of an array.

    const toArray = (obj) => {
        const propertyNames = Object.entries(obj);
        // además de entries, puedes usar keys y values, en ambos casos de manera respectiva se genera
        // un array de las claves y de los valores
        console.log(propertyNames);

    };
    toArray({ shrimp: 15, tots: 12 });
}