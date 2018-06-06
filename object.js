
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    getDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
};

car.getDescription();
console.log(car.year);

// console.log(car['year']);
// console.log(car[1]);

// let anotherCar = {};
// anotherCar.whatever = 'bob';
// console.log(anotherCar.whatever);

// let a = {
//     myProperty: {b: 'hi'}
// };
// console.log(a.myProperty.b);

let carLot = [
    {year: 2017, make: 'Toyota', model: '4Runner'},
    {year: 2015, make: 'BMW', model: '528i'},
    {year: 1982, make: 'Buick', model: 'Skylark'}
];

let contacts = {
    customers: [
        {firstName: 'Bob', lastName: 'Tabor', phoneNumbers: ['123456789', '123']},
        {firstName: 'Richard', lastName: 'Boughton', phoneNumbers: ['987654321', '987']}
    ],
    employees: [
        {firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: ['123789456', '123']},
        {firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: ['456123789']},
        {firstName: 'Grant', lastName: 'Tabor', phoneNumbers: ['789123456']}
    ]
};



