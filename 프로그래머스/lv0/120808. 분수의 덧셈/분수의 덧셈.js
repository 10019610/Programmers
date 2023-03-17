function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // 공통 분모 // 약분 // 
    let result = 0;
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = (denom1 * denom2)
    console.log(numer)
    console.log(denom)
    let numb = 0;

    for(let i=2; i<= Math.min(numer, denom); i++){
        if(numer % i === 0 && denom % i === 0){
            numb = i;
        } 
    }
    if(numb === 0){
    answer.push(numer, denom)
    }else if(numb > 1){
    answer.push(numer/numb, denom/numb)
    }
    return answer;
}