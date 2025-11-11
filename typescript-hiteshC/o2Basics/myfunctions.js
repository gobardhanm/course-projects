"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    val.toUpperCase();
    return val;
}
function signUpUser(name, email, isPaid) { }
signUpUser("koi", "abcd.com", true);
// to add a default value to a parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// this is how we can give it default values
loginUser("makhan", "m@m.com"); // it worked without third argument.
console.log(getUpper("uppercase"));
console.log(addTwo(2));
