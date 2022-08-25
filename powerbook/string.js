// string.js

new String('hello');

let strObj = new String('Lee');

strObj = new String(1);
strObj = new String(undefined);
console.log(strObj)

let str1 = 'Hello';
console.log(str1.length);

let str2 = '안녕하세요!';
console.log(str2.length);

// charAt()
console.log(str2.charAt(0));
console.log(str2.charAt(1));
console.log(str2.charAt(2));
console.log(str2.charAt(3));
console.log(str2.charAt(4));
console.log(str2.charAt(5));
console.log(str2.charAt(6));

for (let i = 0; i < str2.length; i++) {
    console.log(str2.charAt(i));
}

for (let i = 0; i < str2.length; i++) {
    console.log(str2[i])
}

console.clear();
// concat() : 두 문자열을 연결한값을 반환함.
let str = '';
for (let i = 0; i < str2.length; i++) {
    str = str.concat(str2[i]);
}
console.log(str2);

// indexOf("찾을 문자")
console.log(str2.indexOf('하'));

let names = '박민석, 이유미, 권창진, 박경순';
let searchName = '이유미';
if (names.indexOf(searchName) != -1) {
    console.log(searchName + ' 이 있습니다.');
}

if (names.includes(searchName)) {
    console.log(searchName + ' 이 있습니다.');
}

// lastIndexOf('찾을 문자') : 마지막 값을 반환.

console.clear();
// replace()
str = 'Hello world';
let newStr = str.replace('world', 'Lee');
console.log(str);

newStr = str.replace('world', '<strong>$&</strong>');
newStr = str.replace(/hello/gi, 'Lee')
console.log(newStr)

let camelCase = 'helloWorld';
let camelResult = camelCase.replace(/.[A-Z]/g, function (match) {
    console.log(match)
    return match[0] + '_' + match[1].toLowerCase();
})
console.log(camelResult)

// split()
str = 'How are you doing?';
newStr = str.split(' ');
newStr = str.split(/\s/);
console.log(newStr)

// substring(start, end)
newStr = str.substring(2, 5);
str.substring(2); // 생략일 경우 문자의 끝부분 까지.
str.substring(0, str.indexOf(' '));
str.substring(str.indexOf(' ') + 1, str.length);

str.slice(-5); // 음의 값을 인수로 받을 수 있다.

'abc'.repeat(2);

str.includes('world');// 비교..indexOf()
