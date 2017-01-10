var curry = require('lodash/curry');

// Compose example

// f and g = functions
// x = value being "piped" through f and g
var compose = function(f, g){
    return function(x){
        // function g runs before f
        return f(g(x));
    }
}


var toUpperCase = function(x){
    return x.toUpperCase();
};
var exclaim = function(x){
    return x + '!';
};

// Composed functions into one (shout)
var shout = compose(exclaim, toUpperCase);
shout("send in the clowns"); // SEND IN THE CLOWNS!

// Example where sequence matters
// Grab head of passed array
var head = function(x){
    return x[0];
};
// Return copy and reversed array
var reverse = function(x){
    return x.concat().reverse();
}

// Comosed function into one(last)
var last = compose(head, reverse);
last(['jumpkick', 'roundhouse', 'uppercut']); //uppercut


// Compositional Property - Associativity
//var associative = compose(f, compose(g, h)) == compose(compose(f, g), h); // true

var lastUpper = compose(toUpperCase, last);
var loudLastUpper = compose(shout, last);

lastUpper(['jumpkick', 'roundhouse', 'uppercut']); // UPPERCUT
loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']); // UPPERCUT!



/* Pointfree - when functions never mention the data upon which they operate */

/* Not pointfree because we mention the data: word
    var snakeCase = function(word){
        return word.toLowerCase().replace(/\s+/ig, '_');
    };
*/

var replace = curry(function(what, replacement, str){
    return str.replace(what, replacement);
});

var toLowerCase = function(x){
    return x.toLowerCase();
}

// pointfree
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
snakeCase('Hello World'); // hello_world
