/* let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}; */

/* function first() {
    return this;
}

console.log(first() === global); */

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */
/* 
let myObj = {value: 'My Object'};

// value is set on the global object
global.value = 'Global Object';

function third(name) {
    return this.value + ' ' + name;
}

console.log(third());
console.log(third.call(myObj, 'bob'));
console.log(third.apply(myObj, ['bob']));
 */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}

let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}

customer2.print();
customer1.print();

