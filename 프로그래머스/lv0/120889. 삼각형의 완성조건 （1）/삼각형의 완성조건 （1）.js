function solution(sides) {
    var answer = 0;
    let answer2 = 0;
    let max = [];
    answer = sides.sort(function compare(a, b){
        return a - b
    })
    if(answer[0] + answer[1] > answer[2]){
        answer = 1
    }else{
        answer = 2
    }
    
    return answer;
}