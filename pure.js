var Immutable = require('immutable');

// decrementHP, isSameTeam, and punch are all pure functions
// Therefore they are referentially transparent
/*
var decrementHP = function(player){
    return player.set('hp', player.get('hp') - 1);
};

var isSameTeam = function(player1, player2){
    return player1.get('team') === player2.get('team');
};

var punch = function(player, target){
    return isSameTeam(player, target) ? target : decrementHP(target);
};*/

// After some equational reasoning
// Inline the isSameTeam function
// Since the data is immutable, we can simply replace the teams with their actual values
// Since we see 'red' !== 'green', we can automatically call decrementHP
// Then we just have to inline the decrementHP function
var punch = function(player, target){
    return target.set('hp', target.get('hp') - 1);
};



var jobe = Immutable.Map({
    name: 'Jobe',
    hp: 20,
    team: 'red',
});

var michael =Immutable.Map({
    name: 'Michael',
    hp: 20,
    team: 'green',
});

console.log(punch(jobe, michael));
