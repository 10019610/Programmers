function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        let check = []
        for(let j = 0; j< arr1[i].length; j++){
            check.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(check)
    }
    return answer;
}