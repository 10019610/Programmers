function solution(numbers, direction) {
    var answer = [];
    let result = [];
    if(direction === "right"){
    result[0] = numbers[numbers.length-1]
        for(let i = 1;i <= numbers.length-1; i++){
                    result[i] = numbers[i-1]
                }
            }else if(direction === "left"){
                result[numbers.length-1] = numbers[0]
                for(let i = 1; i < numbers.length; i++){
                    result[i-1] = numbers[i]
                }
            }
            
    
    return result;
}