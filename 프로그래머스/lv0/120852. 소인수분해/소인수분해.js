function solution(n) {
    var answer = [];
     let idx = 2
    // n이 0이 될때까지
    while(n !== 1) {
        // n의 약수라면 배열에 추가
        if(n%idx === 0) {
            answer.push(idx)
            n/=idx
            idx = 2
        } else {
            idx += 1
        }
    }
    let check = []
    for(let i of answer){
        if(!check.includes(i)){
        check.push(i)
        }   
    }
    
        
    
    return check;
}