"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // now you cannot return anything except number
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper('nur nabi'));
function signUpUser(name, email, isPaid) { }
signUpUser('Nur', 'mnn.saag@gmail.com', true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('nur', 'mnn@gmail.com');
// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return '200 ok';
// }
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
