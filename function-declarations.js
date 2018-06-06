// function sayHello() {
//     console.log('-------------');
//     console.log('hello!');
//     console.log('-------------');
// }

// sayHello();
// let a = sayHello;

// a();
// a();

// function sayHello(name) {
//     console.log('-------------');
//     console.log('hello ' + name + '!');
//     console.log('-------------');
// }

// sayHello('bob');
// sayHello('tom');

function calculateTax(amount) {
    let result = amount * 0.1;
    return result;
}

let tax = calculateTax(100);
console.log(tax);

