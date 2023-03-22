function solution(emergency) {
    var answer = [];
    let check = []
        answer = emergency.sort((a,b)=>a-b)
        for(let i = 0; i < emergency.length; i++){
            for(let j =0; j < emergency.length; j++){
                if(answer[j] === emergency[i]){
                    check.push(j+1)
                }
            }
        }
    return check;
}