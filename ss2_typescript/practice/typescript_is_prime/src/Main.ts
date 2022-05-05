function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
// Bước 8: Khai báo một biến sum thực hiện việc tính tổng và một mảng số nguyên array = [1,5,9,2,6,15,19,35,51,53] và thực hiện việc tìm số nguyên tố và tính tổng các số nguyên tố trong mảng trên

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum = 0;
for (let number of array) {
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);