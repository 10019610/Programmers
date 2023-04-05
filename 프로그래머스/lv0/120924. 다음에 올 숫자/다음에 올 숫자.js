function solution(common) {
    var answer = 0;
    for(let i = 0; i< common.length; i++){
        if(common[i+1] - common[i] === common[i+2] - common[i+1]){
            answer = common[common.length-1] + common[i+1] - common[i]
        } 
        if(common[i+1]/common[i] === common[i+2]/common[i+1]){
            answer = (common[i+1]/common[i])* common[common.length-1]
        }
    }
    return answer;
}