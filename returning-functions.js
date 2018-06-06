// function one() {
//     return 'one';
// }

// console.log(one());

// let value = one;

// console.log(value());
// console.log(typeof value);

// console.log(value());
// string
// number
// boolean
// undefined
// function

// function two() {
//     return function () {
//         console.log('two');
//     }
// }

// let myFunction = two();
// myFunction();
// console.log(typeof myFunction);

function three() {
    return function () {
        return 'three';
    }
}

console.log(three()());
