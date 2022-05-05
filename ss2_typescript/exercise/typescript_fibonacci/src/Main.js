function fibonacci(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0 || num == 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var sum = 0;
var n = 10;
for (var i = 0; i < n; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log("T\u1ED5ng c\u1EE7a" + n + "s\u1ED1 fibonacci \u0111\u1EA7u ti\u00EAn l\u00E0 : " + sum);
