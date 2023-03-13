function solution(my_string) {
    var answer = [];
    let arr = my_string.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== "a" && arr[i] !== "e" && arr[i] !== "i" && arr[i] !== "o" && arr[i] !== "u" ){
            answer.push(arr[i])
        }
    }
    return answer.join("");
}