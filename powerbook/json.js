var json = JSON.stringify(true);

json = JSON.stringify({
    name: 'hong',
    age: 18
}, function (key, value) {
    console.log(`key: ${key}, value: ${value}`);
    return value;
})

console.log(json);