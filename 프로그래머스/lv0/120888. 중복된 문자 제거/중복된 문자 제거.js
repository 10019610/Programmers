function solution(my_string) {
    var answer = [];
    let arr = my_string.split("")
    console.log(arr)
    
arr.forEach((element) => {
    if (!answer.includes(element)) {
        answer.push(element);
    }
});
    
    return answer.join("");
}