var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }
    
    // return object
    return {
        // value: count,
        getCounter: function() {return count;},

        setCounter: function(value) {count = value;},

        increment: function() {
            count++;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

// console.log(counter.count);
counter.increment();
counter.increment();
counter.increment();

// Accidentally created a closure
// console.log(counter.value);

counter.setCounter(7);
console.log(counter.getCounter());

counter.reset();


