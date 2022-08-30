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
console.log(seriesResistance([1, 5, 6, 3]));