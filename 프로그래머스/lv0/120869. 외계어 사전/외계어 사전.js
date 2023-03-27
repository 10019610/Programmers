function solution(spell, dic) {
    // spell의 글자가 모두 포함된 dic이 있다면 return 1; else 2
    let spellArr = []
    dic.map((word) => {
        let count = 0;
        spell.map((item)=>{
            if(word.includes(item)){
                count++
            }
        })
        if(count === spell.length){
            spellArr.push(word)
        }
    })
    
    return spellArr.length === 0 ? 2 : 1;
}