function solution(money) {
    var answer = [];
    let americano = Math.floor(money/5500);
    let change = money - americano * 5500;
    answer.push(americano, change)
    return answer;
}