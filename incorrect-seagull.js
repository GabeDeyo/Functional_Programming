var Flock = function(n){
    //Declare number of segulls in this flock
    this.seagulls = n;
};

Flock.prototype.conjoin = function(other){
    // Conjoin Flock to other flock with addition
    this.seagulls += other.seagulls;
    return this;
};

Flock.prototype.breed = function(other){
    // Breed Flock with other flock with multiplication
    this.seagulls = this.seagulls * other.seagulls;
    return this;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

//var result = flock_a.conjoin(flock_c).seagulls; // 4
//var result = flock_a.conjoin(flock_c).breed(flock_b).seagulls; // 8
//var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls; //32

// Incorrect because flock_a becomes permanently altered in the process
// Turns into 8 + 8 * 2 = 32
console.log(result);
