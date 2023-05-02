function solution(n) {
    var answer = [];
    let str = String(n)
    let arr = str.split("")
    for(let i = arr.length-1; i >= 0; i--){
        answer.push(Number(arr[i]))
    }
    return answer;
}