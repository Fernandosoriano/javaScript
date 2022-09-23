// 1.-What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters!
//  Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their 
// letters remain in the same order.
// function detectWord(str) {

// }

const detectWord = str => {
        arrOfLowers = str.split("").filter(letra => letra == letra.toLowerCase())
        return arrOfLowers.join("");
    }
    // EL más votado:
    // const detectWord = str => str.replace(/[A-Z]/g, '');
    // FUENTE: https: //edabit.com/challenge/rvsvGvqZ3BzNieKqA
    // detectWord("UcUNFYGaFYFYGtNUH")
    // detectWord("bEEFGBuFBRrHgUHlNFYaYr")
    // detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")


// function fixImport(s) {
// }

// 2.-Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:
// from module_name import object
// Given a string of an incorrect import statement, return the fixed string.
//  All import statements will be the wrong way round.
const fixImport = s => {
        arrStr = s.split(" ")
        return `${arrStr[2]} ${arrStr[3]} ${arrStr[0]} ${arrStr[1]}`
    }
    // FUENTE: https://edabit.com/challenge/3XiwjSzuMN4MQN6tJ
    // Examples
    // fixImport("import object from module_name") ➞ "from module_name import object"

// fixImport("import randint from random") ➞ "from random import randint"

// fixImport("import pi from math") ➞ "from math import pi"