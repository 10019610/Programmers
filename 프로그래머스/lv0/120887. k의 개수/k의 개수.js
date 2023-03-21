function solution(i, j, k) {
    var answer = 0;
    const arr = [];
    
    for(let x = i; x <= j; x++){
        arr.push(String(x))
    }
    
    arr.forEach((qq) => {
        qq.split('').forEach((ss) => {
            
            if(ss == k){
                
                answer++
            }
        })
    })
    return answer;
}

