/* Find the last digit of n!(factorial), which is different from zero.
    Tìm số cuối cùng khác 0 của n giai thừa 
*/
/* Example

For n = 5, the output should be lastDigitDiffZero(n) = 2.
5! = 1 · 2 · 3 · 4 · 5 = 120.
For n = 6, the output should be lastDigitDiffZero(n) = 2.
6! =1 · 2 · 3 · 4 · 5 · 6 = 720.
For n = 10, the output should be lastDigitDiffZero(n) = 8.
10! = 3628800. */

function lastDigitDiffZero(n) {
    let factorial = 1, array;
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    array = factorial.toString().split('').map(e=>+e);
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] != 0) {
        return array[i];
      }
    }
  }