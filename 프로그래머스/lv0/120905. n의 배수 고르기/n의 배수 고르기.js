function solution(n, numlist) {
    var answer = [];
    for(const a of numlist){
        if(a % n === 0){
            answer.push(a)
        }
    }
    return answer;
}