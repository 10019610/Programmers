function solution(polynomial) {
    var answer = '';
    let arr = polynomial.split(" ")
    let xArr = [];
    let numbArr = [];
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        // x 항, 숫자 항 분류
        // x 항에서 숫자만 추출하기 substr.
        if(arr[i].includes("x")){
            if(arr[i] === "x"){
                xArr.push(1)
            }else if(Number(arr[i].substr(0, 2)) < 100) {
                xArr.push(Number(arr[i].substr(0, 2)))
                }else {
                xArr.push(Number(arr[i].substr(0, 1)))
                }
        }
        else if(arr[i] !== isNaN() && arr[i] !== "+"){
            numbArr.push(Number(arr[i]))
        }
    }
    console.log(xArr)
    let xResult = 0; let numbResult = 0;
    xArr.map((x)=> {
        xResult += x
    })
    numbArr.map((n)=> {
        numbResult += n
    })
    // x가 1일때는 x만, numb가 0일때는 x 항만
    // x가 0일때는 numb 항만
    // x와 numb 둘다 0일때는 return 0;
    
    // x , number 둘다 0이 아니면 Ax+숫자의 형식으로
    if(xResult !== 0 && numbResult !== 0){  
        return xResult === 1 ? `x + ${numbResult}` : `${xResult}x + ${numbResult}`;    
    }
    
    // x는 0이고 numb만 있다면 return numbResult;
    if(xResult === 0 && numbResult !== 0){
        return `${numbResult}`
    }
    
    // x는 0이 아니고 numb는 0일때는 Ax의 형식
    if(xResult !== 0 && numbResult === 0){        
        return xResult === 1 ? "x" : `${xResult}x`;
    }
    
    // 둘다 0이면 그대로 return 0
    if(xResult === 0 && numbResult === 0){
        return "0";
    }
}