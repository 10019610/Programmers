function solution(s) {
    var answer = '';
    let arr = s.split("")
    let check = [];
   arr.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            check.push(item);
        }
    })
    return check.sort().join('');
}