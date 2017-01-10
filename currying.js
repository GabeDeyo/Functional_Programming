var curry = require('lodash/curry');


// Currying - call a function with fewer arguments than it expects.
// It returns a function that takes the remaining arguments.

// Simple Currying example
var add = function(x){
    return function(y){
        return x + y;
    };
};

var increment = add(1);
var addTen = add(10);

increment(2); // 3
addTen(2); // 12

// These functions show the ability to 'pre-load' a function with an argument or two in order
// to receive a new function that remembers those arguments.
var match = curry(function(what, str){
    return str.match(what);
});

var replace = curry(function(what, replacement, str){
    return str.replace(what, replacement);
});

var filter = curry(function(f, ary){
    return ary.filter(f);
});

var map = curry(function(f, ary){
    return ary.map(f);
});

match(/\s+/g, 'hello world'); // [ ' ' ]
match(/\s+/g)('hello world'); // [ ' ' ]

var hasSpaces = match(/\s+/g);
hasSpaces('hello world'); // [ ' ' ]
hasSpaces('spaceless'); // null
filter(hasSpaces, ['tori_spelling', 'tori amos']); // [ 'tori amos' ]

var findSpaces = filter(hasSpaces);
findSpaces(['tori_spelling', 'tori amos']); // [ 'tori amos' ]

var noVowels = replace(/[aeiouy]/ig);
var censored = noVowels("*");
censored('Chocolate Rain'); // Ch*c*l*t* R**n




/*
    Currying is useful for making new functions just by giving our base
    functions some arguments as seen in hasSpaces, findSpaces, and censored
*/
