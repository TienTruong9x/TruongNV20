// Mảng đã sắp xếp

/* Given an array of integers, your task is to check whether or not the array is already sorted. Return True if it is and False otherwise. 
    Cho một mảng số nguyên, nhiệm vụ của bạn là check xem mảng đó đã đc sắp xếp hay chưa, return true nếu nó đã sx và ngược lại
*/

/* BA :
    Tạo một mảng mới, push những phần tử là kết quả của số vị trí 1 cho số đứng vị trí 2 sau nó.
    Nếu mảng mới đó các phần tử đều âm thì là mảng sắp xếp tăng dần,còn phần tử đều dương thì sắp xếp giảm dần
    Còn không thì là chưa sắp xếp.
    - Hàm every(fn()) sẽ giúp kiểm tra tất cả các phần tử và trả về boolean
*/

function isSortedArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] - arr[i + 1])
    }
    return newArr.every(e => e >= 0) || newArr.every(e => e <= 0)
  }