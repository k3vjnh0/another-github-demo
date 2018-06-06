let counter = (function() {

    let count = 0;

    function print(message) {
        console.log(`${message} => ${count}`);
    }

    function getCount() {return count;}

    function setCount(value) {count = value;}

    function incrementCount() {
        count++;
        print('After increment: ');
    }

    function resetCount() {
        print('Before reset: ');
        setCount(0);
        print('After reset: ');
    }

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };

})();

// console.log(counter);
// console.log(counter.get());

counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());
counter.set(4);

counter.reset();