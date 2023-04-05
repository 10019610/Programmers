function solution(spell, dic) {
    // spell의 글자가 모두 포함된 dic이 있다면 return 1; else 2
    let check = []
    
    // dic의 요소에 spell이 포함된 개수를 count함
    dic.map((dicItem) => {
        let count = 0;  // 겹치는 spell을 count하는 변수
        spell.map((spellItem)=>{ // spell의 요소를 
            if(dicItem.includes(spellItem)){
                count++
            }
        })
        if(count === spell.length){ // 겹치는 횟수가 spell의 개수와 같다 = spell의 요소로 구성됨 
            check.push(dicItem)           // check array에 dic의 요소를 push
        }
    })
    let answer = 0;                 // 
    if(check.length === 0){
        answer = 2
    }else {
        answer = 1
    }
    
    return answer;
}