function solution(my_string, letter) {
    var answer = [];
    let arr = my_string.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== letter){
            answer.push(arr[i])
        }
    }
    return answer.join("");
}