function solution(hp) {
    var answer = 0;
    let power5 = 5;
    let power3 = 3;
    let power1 = 1;
    answer += Math.floor(hp / power5);
    hp = Math.ceil(hp % power5);
    
    answer += Math.floor(hp / power3);
    hp = Math.ceil(hp % power3);
    
    answer += Math.floor(hp / power1);
    
    return answer;
}