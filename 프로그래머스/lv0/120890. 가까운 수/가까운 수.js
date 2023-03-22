function solution(array, n) {
    var answer = 0;
    let result = [];
for(let i = 0; i < array.length; i++){
    result.push(Math.abs(array[i] - n));
    }

    const min = Math.min(...result)
    console.log(min)
    
    let check = [];
     for(let index = 0; index < result.length; index++){
        if(result[index] === min){
            check.push(array[index]);
        }
    }
    
    return Math.min(...check);
}

// 1 9 21 24 ,15
// 14 6 11