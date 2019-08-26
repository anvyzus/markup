/* fib <= 15!!! */

function calcFibonacci(fib) {
    if (fib > 1) {
        return calcFibonacci(fib - 1) + calcFibonacci(fib - 2);
    } else {
        return fib;
    }
}
console.log(calcFibonacci(15));