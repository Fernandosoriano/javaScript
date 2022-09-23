////// 1.-Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of 
// times the first string (the single character) is found in the second string.

// string = 'Fernando'
// console.log([...string].filter(l => l == 'e').length);
const charCount = (myChar, str) => [...str].filter(l => l == myChar).length

// console.log(charCount("a", "edabit"));
// console.log(charCount("c", "Chamber of secrets"));
// console.log(charCount("b", "big fat bubble"));