// timer.js
const timeout = setTimeout(() => {
    console.log('1.5 sec.');
}, 1500);

const interval = setInterval(() => {
    console.log('1 sec.');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('don\'t exec.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('execute immediate');
});

const immediate2 = setImmediate(() => {
    console.log('don\'t execute');
})
clearImmediate(immediate2);