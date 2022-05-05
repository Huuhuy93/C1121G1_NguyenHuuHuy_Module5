function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
// Bước 8: Khai báo một biến sum thực hiện việc tính tổng và một mảng số nguyên array = [1,5,9,2,6,15,19,35,51,53] và thực hiện việc tìm số nguyên tố và tính tổng các số nguyên tố trong mảng trên
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var number = array_1[_i];
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
