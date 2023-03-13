function solution(num_list) {
    var answer = [];
    var count = 0;
    var count2 = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] === 0){
            count = count + 1
        }
        else if(num_list[i] % 2 === 0){
            count = count + 1
        }else if(num_list[i] % 2 !== 0){
            count2 = count2 + 1
        }
    }
    answer.push(count, count2)
    
    return answer;
}