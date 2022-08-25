let a = prompt();
let last = +a % 10;
a = ((+last * 1000 + +a) - +last) / 10

alert(a)