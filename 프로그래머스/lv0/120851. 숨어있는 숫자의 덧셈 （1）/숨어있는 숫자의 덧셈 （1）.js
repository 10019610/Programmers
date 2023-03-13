function solution(my_string) {
    var answer = 0;
    let arr = my_string.split("")
    for(let i = 0; i < arr.length; i++){
        if(parseInt(arr[i]) > 0){
            answer += parseInt(arr[i])
        }
    }
    
    return answer;
}