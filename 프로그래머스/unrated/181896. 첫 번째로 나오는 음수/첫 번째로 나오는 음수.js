function solution(num_list) {
    var answer = 0;
    const arr = num_list;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] < 0){
            answer = i
            break;
        }
        answer = -1
    }
    return answer;
}