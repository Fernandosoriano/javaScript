// 1.- Left Shift by Powers of Two
function shiftToLeft(x, y) {
    res = x * (2 ** y)
    return res
}
// console.log(shiftToLeft(5, 2));

// 2.- to binary
toBinary = num => num.toString(2)
    // console.log(toBinary(0xFF));

// 3.-Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes 
// through each resistor in the chain and the total resistance, RT, of
// the circuit must be equal to the sum of all the individual resistors
// added together. That is:
// FUENTE:https://edabit.com/challenge/JDkyQJqNfJNhvjmRW
function seriesResistance(arr) {
    suma = 0
    for (let resistencia of arr) {
        suma = suma + resistencia
    }
    return suma <= 1 ? `${suma} ohm` : `${suma} ohms`
}
// console.log(seriesResistance([1, 5, 6, 3]));

// 4.-Number Split
// Given a number, return an array containing the two halves of the number.
// If the number is odd, make the rightmost number higher.

function numberSplit(n) {
    if (n % 2 == 0) {
        half = n / 2
        l = [half, half]
    } else if (n % 2 != 0 && n > 0) {
        half = n / 2
        half_inf = Math.floor(half)
        half_sup = Math.ceil(half)
        l = [half_inf, half_sup]
    } else if (n < 0) {
        half = n / 2
        half_inf = Math.floor(half)
        half_sup = Math.ceil(half)
        l = [half_inf, half_sup]
    }
    return l
}
// la más votada:
function numberSplit(n) {
    return [Math.floor(n / 2), Math.ceil(n / 2)]
}

function perimeter(l, num) {
    return (l == 'c') ? 2 * 3.14 * num : 4 * num
}
// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));
// console.log(perimeter("c", 9));

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
// console.table(activities);

function spotlightSum(n) {
    m = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    ];
    for (let i in m) {
        for (let num of m[i]) {
            if (num == n) {
                const a = Number((m[Number(i) - 1][m[i].indexOf(n)]))
                const b = Number((m[Number(i) - 1][m[i].indexOf(n)] - 1))
                const c = Number((m[Number(i) - 1][m[i].indexOf(n)] + 1))

                const d = Number((m[Number(i)][m[i].indexOf(n) + 1]))
                const e = Number((m[Number(i)][m[i].indexOf(n) - 1]))

                const f = Number((m[Number(i) + 1][m[i].indexOf(n)]))
                const g = Number((m[Number(i) + 1][m[i].indexOf(n)] - 1))
                const h = Number((m[Number(i) + 1][m[i].indexOf(n)] + 1))
                return (a + b + c + d + e + f + g + h + n);
            }
        }
    }
}
console.log(spotlightSum(45));