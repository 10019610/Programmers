function solution(rsp) {
    var answer = [];
    let r = "0"
    let s = "2";
    let p = "5";
    let arr = rsp.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === r){
        answer.push(p)
        }else if(arr[i] === s){
            answer.push(r)
        }else if(arr[i] === p){
            answer.push(s)
        }
    }
    return answer.join("");
}