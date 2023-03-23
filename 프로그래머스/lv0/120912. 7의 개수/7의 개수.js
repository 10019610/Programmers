function solution(array) {
    var answer = 0;
    let str = array.join("")
    let arr = str.split("")
    console.log(arr)
    for(let i of arr){
        if(Number(i) === 7){
            answer++
        }
    }
    return answer;
}