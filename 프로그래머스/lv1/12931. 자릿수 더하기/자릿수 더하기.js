function solution(n)
{
    var answer = 0;
    const str = String(n)
    const arr = str.split("")
    arr.map((n)=> {
        answer += parseInt(n)
    })
    console.log(arr)


    return answer;
}