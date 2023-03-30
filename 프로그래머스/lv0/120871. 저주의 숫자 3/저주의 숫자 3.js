function solution(n) {
    var answer = 0;
    // 3이 나오면 3 대신 3+1로 대체 
    // 10의 경우 앞의 3의 개수 3개여서 16
    // 11 - 17, 12-18, 13-20 14-22,15-25
    for(let i = 1; i <= n; i++){
    answer += 1
        
          while(true){
        if(answer % 3 === 0 || String(answer).includes("3")){
            answer += 1
            continue
        }
        break;
    }
    }
  
    return answer;
}