//callback functions
let str = "hello cdac..";
let str1 = "Welcome";
let fun = function (str, str1) {
    return str + str1;
}
function hello(fn) {
    fn();
}


helloWorld(function () {
    // logic comes here
    console.log("Callback using Annonymous");
});

// case-2
// using arrow functions
helloWorld(() => {
    // logic comes here
    console.log("Callback using Arrow functions");
});

// case-3
// declare callback functions first in separate variable
let callbckFn = function () {
    // logic here
    console.log("Callback using annynomus; via variable");
};
helloWorld(callbckFn);

// Case - 4
let arrwFn = () => {
    // logic here
    console.log("Callback using Arrow; via variable");
};
helloWorld(arrwFn);