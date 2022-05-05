function fibonacci(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0 || num == 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

let sum = 0;
let n = 10;
for (let i = 0; i < n; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log(`Tổng của` + n + `số fibonacci đầu tiên là : ` +sum);
