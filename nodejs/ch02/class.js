var Human = function (type) {
    this.type = type || 'human';
}
Human.isHuman = function (human) {
    return human instanceof Human;
}
Human.prototype.breathe = function () {
    console.log('h-a-a-m')
}
var h1 = new Human('human');
console.log(h1.breathe());

var Zero = function (type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
}
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () {
    console.log(this.firstName + ' ' + this.lastName)
}
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero);