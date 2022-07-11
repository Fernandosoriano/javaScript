{ //*** 1.-Create a function that takes a "base number" as an argument. This function should 
    // return another function which takes a new argument, and returns the sum of the 
    // "base number" and the new argument.

    // URL = https://edabit.com/challenge/ENWFBL4jbTgLbSqwS;
    const makePlusFunction = (x) => {
        return function suma(y) {
            return x + y;

        };
    };
    const plusFive = makePlusFunction(5);
    // console.log(plusFive(3));
}

{ // 2.-You have two arrays. One shows the names of the people names, while the other shows 
    // their occupation jobs. Your task is to create an object displaying each person to their 
    // respective occupation.

    const assignPersonToJob = (arr1, arr2) => {
        if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
            return console.log('sólo se aceptan arrays como parametros');
        }
        if (arr1.length !== arr2.length) {
            return console.log(`La longitud de los arrays debe ser igual, cuidado en este caso
        estas ingresando un array de nombres que tiene ${arr1.length} elementos,
        y uno de ocupaciones que tiene ${arr2.length} elementos`);
        }
        const obj = {};
        // for (let i in arr1) {
        //     obj[arr1[i]] = arr2[i];
        //     // console.log(i);
        // }
        arr1.forEach((value, index) => {
            obj[value] = arr2[index];
        });
        console.log(obj);
    };
    const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"];
    const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];
    // assignPersonToJob(names, jobs);
}


{ // 3.-Write a function redundant that takes in a string str and returns a function that 
    // returns str.
    const redundant = (str) => {
        const imprimeString = () => {
            return str;
        };
        return imprimeString;
    };
    // const f1 = redundant("apple");
    // console.log(f1());
    // const f2 = redundant("pear");
    // console.log(f2());
    // const f3 = redundant("");
    // console.log(f3());
}