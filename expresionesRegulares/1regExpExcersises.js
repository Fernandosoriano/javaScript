function potatoes(str) {
    // let temp = "This is a string.";
    let count = (str.match(/potato/g)).length;;
    return count;
}
// console.log(potatoes("potatoapple"))
// el más votado:
// const potatoes = s => s.match(/potato/g).length;