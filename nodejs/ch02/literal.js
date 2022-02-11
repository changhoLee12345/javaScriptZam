var sayNode = function () {
    console.log('node');
}

var es = 'ES';

var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode
}

oldObject[es + 6] = 'Fantastice';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject = {
    sayJS() {
        console.log('js')
    },
    sayNode,
    [es + 6]: 'Fanstic'
}
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);


var relationShip1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        })
    }
}
relationShip1.logFriends();

const relationShip2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        })
    }
}
relationShip2.logFriends();


console.clear();
var candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
}
var candy = candyMachine.getCandy;
console.log(candy())
var count = candyMachine.status.count;
console.log(count);

const candyMachines = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
}

const osj = {
    getCandy,
    status: {
        count,
        name
    }
} = candyMachines;
console.log(candyMachines.status.count)
console.log(osj.getCandy())