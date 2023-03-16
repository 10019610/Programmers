function solution(n) {
    var answer = 0;
    let piz = 6;
    while(piz % n !== 0){
        piz += 6
    }
    return piz/6;
}