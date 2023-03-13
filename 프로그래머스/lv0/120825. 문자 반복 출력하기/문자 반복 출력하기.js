function solution(my_string, n) {
    var answer = [];
    let arr = my_string.split("");
    for(let i = 0; i < arr.length; i++){
        answer.push(arr[i].repeat(n))
    }
    return answer.join("");
}