function solution(M, N) {
    var answer = 0;
    let mm = M;
    let nn = N;
    if(mm * nn === 1){
        answer = 0;
    }else {
        answer = mm*nn-1
    }
    return answer;
}