function solution(array) {
    // var answer = 0;

    if(array.length === 1){
        return array[0]
    }

    const obj = {};
    const answer = [];
    
  array.forEach((n) => {
    obj[n] = obj[n] ? obj[n]+1 : 1;
  });
    for(let i in obj){
        answer.push([i,obj[i]])
    }
    answer.sort((a,b)=>b[1]-a[1])
    console.log(answer)
    
    if(answer.length === 1){
        return Number(answer[0][0])
    }
    
    if (answer[0][1] === answer[1][1]) return -1;
    
    return Number(answer[0][0]);
}