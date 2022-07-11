// 1.-Write three functions to calculate the bitwise AND, bitwise OR and bitwise
// XOR of two numbers.
// Recurso = https://www.w3schools.com/js/js_bitwise.asp
function bitwiseAND(n1, n2) {
    resultAnd = n1 & n2;
    return resultAnd;
}

function bitwiseOR(n1, n2) {
    resultOr = n1 | n2;
    return resultOr;
}

function bitwiseXOR(n1, n2) {
    resultXor = n1 ^ n2;
    return resultXor;
}

console.log(bitwiseAND(7, 12));

console.log(bitwiseOR(7, 12));

console.log(bitwiseXOR(7, 12));