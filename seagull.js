var add = function(x, y){
    return x + y;
}

var multiply = function(x, y){
    return x * y;
}

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(
    multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b)
);

console.log(result);

// Associative
//add(add(x, y), z) === add(x, add(y, z));
console.log(add(add(1, 2), 3) === add(1, add(2, 3)));

// Commutative
// add(x, y) === add(y, x);
console.log(add(1, 2) === add(2, 1));

// Identity
// add(x, 0) === x;
console.log(add(1, 0) === 1);

// Distributive
// multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z));
console.log(multiply(1, add(2, 3)) === add(multiply(1, 2), multiply(1, 3)));

var hi = function(name){
    return 'Hi ' + name;
};

console.log(hi);
console.log(hi('Gabe'));
