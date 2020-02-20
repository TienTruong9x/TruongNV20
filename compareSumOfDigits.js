// So sánh tổng các chữ số

/* Đề bài :Given an integer number as a string (possibly starts with zeros), write a program that finds the difference between the sum of odd digits and the sum of even digits. */

// Cho một mảng số nguyên dưới dạng chuỗi, có thể bắt đầu bằng số 0, viết 1 chương trình tìm điểm khác nhau giữa tổng số chẵn và tổng số lẻ của nó ( hiệu của tổng số lẻ trừ đi tổng số chẵn )

/* 
     Example:

    For input = '012345', the output should be compareSumOfDigits(input)=3.
    The sum of the odd numbers is 1 + 3 + 5 = 9 and the sum of the even numbers is 2 + 4 = 6.
    The difference odd minus the even number will be 9 - 6 = 3 
 */

/* BA:
    - Do biến truyền vào là một string nên biến đó sẽ giống mảng và sử dụng được vòng lặp.
    - Khi 1 chuỗi có giá trị là number chia cho 1 số khác sẽ đc JS tự động covert về Number
*/

function compareSumOfDigits(input) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < input.length; i++) {
        if(input[i]%2===0){
            evenSum+=input[i]*1; //  ParseInt, sử dụng hàm Number(string), sử dụng toán tử + trước chuỗi giá trị là số, /1,-0,bit not ~~,dịch bit>>>
        }
        else
        {
            oddSum+=input[i]*1;
        }
    }

    return oddSum - evenSum;
}


console.log(compareSumOfDigits('012345'));
