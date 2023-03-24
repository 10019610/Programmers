function solution(numbers) {
    var answer = 0;
    const numb = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    numb.forEach((item, idx)=> {
       numbers = numbers.replaceAll(item, idx)
    })
    return Number(numbers);
}