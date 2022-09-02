{ //1.-Write a function that converts an object into an array, where each element represents a
    //  key-value pair in the form of an array.

    const toArray = (obj) => {
        const propertyNames = Object.entries(obj);
        // además de entries, puedes usar keys y values, en ambos casos de manera respectiva se genera
        // un array de las claves y de los valores
        // console.log(propertyNames);

    };
    toArray({ shrimp: 15, tots: 12 });
}

// Drink Sorting
// You will be given an array of drinks, with each drink being an object with 
// two properties: name and price. Create a function that has the drinks array
//  as an argument and return the drinks objects sorted by price in ascending order.
drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 },
        { name: "coca", price: 80 },
        { name: "fanta", price: 800 }

    ]
    // sortDrinkByPrice = drinks => drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)
sortDrinkByPrice = drinks => drinks.sort((a, b) => a.price - b.price)

console.log(sortDrinkByPrice(drinks));

// DUDA cómo hacerlo para array con n elementos?????

// const numeros = [3, 23, 12];

// console.log(numeros.sort(function(a, b) { return b - a })); // --> 23, 12, 3