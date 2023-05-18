function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
       const trans = (arr1[i] | arr2[i]).toString(2)
       console.log(trans)
        let arr = []
        for(let j = trans.length - n; j < trans.length; j++){
            if(trans[j] === "1"){
                arr.push("#")
            }else {
                arr.push(" ")
            }
        }
    console.log(arr)
    answer.push(arr.join(""))
        
    }
    return answer;
}