let num = 123456789
console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));