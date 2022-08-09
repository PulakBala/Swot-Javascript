let first = 5;
let second = 4;

console.log(first, second);

const temp = first;
first = second;
second = first;
console.log(temp, second);