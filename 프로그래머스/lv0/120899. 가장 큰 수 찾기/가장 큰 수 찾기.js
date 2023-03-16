function solution(array) {
    var answer = [];
    let max = Math.max(...array)
    for(let i  = 0; i < array.length; i++){
        if(max === array[i]){
            answer.push(array[i], i)
        }
    }
    return answer;
}