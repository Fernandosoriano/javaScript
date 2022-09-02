// date = new Date(2013, 11, 24);
// const date1 = date.getDate();
// const month = date.getMonth();
// console.log(date1);
// console.log(month);

// function timeForMilkAndCookies(date) {

// }

const timeForMilkAndCookies = date => (date.getDate() == 24 && date.getMonth() == 11) ? true : false
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));