function solution(my_string) {
    let arr = my_string.split(" ")
    let answer = Number(arr[0]);
    let start ;
    
    arr.forEach((x,index) => {
        if(x === "+"){
            answer += Number(arr[index+1])
        }
        if(x === "-"){
            answer -= Number(arr[index+1])
        }
    })
    
    return answer;
}