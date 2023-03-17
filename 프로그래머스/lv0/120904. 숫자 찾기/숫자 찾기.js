function solution(num, k) {
    var answer = 0;
    let answer2 = 0;
    let arr = String(num).split("")
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i].includes(k) === true){
    //         answer = i+1
    //     }else {
    //         answer = -1
    //     }   
    // }
    answer = arr.indexOf(String(k))
    if(answer === -1){
        answer = -1
    }else {
        answer += 1
    }
    
  
    return answer;
}