function solution(s) {
    var answer = 0;
    let arr = s.split(" ")
    let check = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== "Z" && arr[i+1] !== "Z"){
           check.push(arr[i])
        }       
    }
    for(let j of check){
        answer += Number(j)
    }
    
    console.log(check)
    return answer;
}