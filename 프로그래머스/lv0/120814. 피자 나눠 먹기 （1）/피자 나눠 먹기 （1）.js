function solution(n) {
    var answer = 0;
    let a = n / 7
    if(n < 8){
        answer = 1
    }else if(n % 7 === 0){
        answer = n / 7
    }
    else{
         answer = Math.floor(a) + 1 ;
    }
    return answer
}