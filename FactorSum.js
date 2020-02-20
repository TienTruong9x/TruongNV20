/* Đề bài :Consider the following operation - we take a positive integer n and replace it with the sum of its prime factors (if a prime number is presented multiple times in the factorization of n, then it's counted the same number of times in the sum). This operation is applied sequentially first to the given number, then to the first result, then to the second result and so on, until the result remains the same.

Given any number, find the final result of the operation.

Xem xét các hoạt động sau đây, chúng ta lấy một số nguyên dương n và thay thế chúng bằng :
Cho số n, tìm các ước là số nguyên tố của nó (a,b,c) a*b*c=n ; s=a+b+c.Nếu s là số nguyên tố thì xuất ra s, còn s không phải số nguyên tố thì lại quay lại ban đầu với n= s. Chương trình kết thúc khi thỏa mãn điều kiện đầu ra s phải là số nguyên tố ( trừ trường hợp đặc biệt là n<2 và n=4)
*/

function status (n) {
    if ( n < 2 || n == 4 ){
        return false;
    } 
    for ( let i = 2;i <= n;i++ ) {
        if ( n % i == 0 ) return true;
    } 
    return false;
}

function factorSum(n){

    while(status(n)){
        let arr=[];
        let sum=0;

        for (let i = 2; i <=n ; i++) {
            if(n%i===0){
                arr.push(i);
            }
        }

        console.log(arr);

        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        console.log(sum);

        if(status(sum)){
            return sum;
        }
        else
        {
            factorSum(sum);
        }
    }
}