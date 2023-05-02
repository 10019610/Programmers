function solution(s){
    var answer = true;
    let pcount = 0;
    let ycount = 0;
    let arr = s.split("")
    arr.forEach((i)=> {
        if(i === 'p' || i === 'P'){
            pcount++
        }
        if(i === 'y' || i === 'Y'){
            ycount++
        }
    })
    if(pcount === ycount){
        return true;
    }else if(pcount === 0 && ycount === 0){
        return true
    }else {
        return false
    }

}