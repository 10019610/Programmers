function solution(my_string) {
    var answer = [];
    let arr = my_string.split("");
    for(const a of arr){
        if(a >= 0){
            answer.push(parseInt(a))
        }
        console.log(a)
    }
    return answer.sort((a,b)=>{
        return a - b
    });
}