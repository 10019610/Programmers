function solution(x) {
    var answer = true;
    let check = 0;
    let str = String(x)
    let arr = str.split("")
    for(let i = 0; i < arr.length; i++){
        check += parseInt(arr[i])
    }
    console.log(check)
    if(x % check === 0){
        answer = true
    }else{
        answer =false
    }
    return answer;
}