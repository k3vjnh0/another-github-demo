let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gary', 'wolfgang', 'mark'];

let lost = [4, 8, 15, 16, 23, 42];
let fibonaci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var combine = lost.concat(fibonaci);
// console.log(combine);

// console.log(fibonaci.join('~'));

// push, pop (last index)

// console.log(lost.shift());
// console.log(lost);

// lost.unshift(1, 2, 3, 4);
// console.log(lost);

// console.log(names);
// console.log(names.reverse());
// console.log(names.sort());

// console.log(others.indexOf('mark'));
// console.log(others.indexOf('kevin'));

// console.log(combine);
// console.log(combine.lastIndexOf(1));

var filtered = combine.filter( (x) => { if (x <= 15) return x; } );
// console.log(filtered);

// names.forEach((name) => console.log(`howdy ${name}`) );

console.log(filtered.every((num) => num < 16));

console.log(fibonaci.some((num) => num > 100));
