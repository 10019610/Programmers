function solution(numbers) {
    var answer = 0;
    let sortArr = numbers.sort(function compare(a,b){
        return a-b
    })
    answer = sortArr[numbers.length-1] * sortArr[numbers.length - 2]
    
    return answer;
}