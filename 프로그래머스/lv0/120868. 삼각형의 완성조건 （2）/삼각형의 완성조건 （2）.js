function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    
    // max가 제일 긴 변 일때; min3  max6면 3 + x > 6 이어야
    for(let i = max - min + 1; i <= max; i++){
        answer ++
    }
    for(let i = max + 1 ; i < max + min; i++) {
        answer++
    }
    return answer;
}