// function solution(order) {
//     var answer = 0;
//     let str = String(order)
//     let arr = str.split("")
//     let arr1 = ["3","0","0","0"];
//     // console.log(arr)
    
//     for(let i = 0; i < arr.length; i++){
//          if(arr[i] % 3 === 0 && arr[i] !== 0){
//             answer = answer + 1
//         }
//     }
   
//     return answer;
// }
function solution(order) {
  let arr = [...String(order)].map((el) => Number(el));
  return arr.reduce((a, c) => c % 3 === 0 && c !== 0 ? a += 1 : a += 0, 0);
}