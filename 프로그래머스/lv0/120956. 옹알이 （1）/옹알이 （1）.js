function solution(babbling) {
    var answer = 0;
    const basic = ["aya", "ye", "woo", "ma"]
    
    for(let i = 0; i < babbling.length; i++){
        let check = babbling[i];
        for(let j = 0; j < basic.length; j++){
                check = check.replace(basic[j], "-");
            }
        check = check.replaceAll("-", "")
        if(check.length === 0){
            answer += 1
        }
        console.log(check)
    }
    return answer;
}