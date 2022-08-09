const fibo = [0, 1, 1];
for(let i = 3; i <= 15; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];

}

console.log(fibo);