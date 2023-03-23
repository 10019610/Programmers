function solution(bin1, bin2) {
    var answer = '';
    let numb1 = parseInt(bin1, 2)
    let numb2 = parseInt(bin2, 2)
    console.log(numb1+numb2)
    return (numb1+numb2).toString(2);
}