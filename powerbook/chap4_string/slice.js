// slice.js
let str = ' 문자열 공백 처리 ';

let result = str.slice(0, -5);
String.prototype.ltrim = function() {
    return this.replace(/^\s+/,'')
}
String.prototype.rtrim = function() {
    return this.replace(/\s+$/,'');
}
console.log(str.ltrim().rtrim());