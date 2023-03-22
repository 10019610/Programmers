// function solution(keyinput, board) {
//     // 정 중앙에서 출발 (0,0)
//     let result = []
//     // 최대 이동거리 = 좌우 Math.floor(board[0]/2) , 상하 Math.floor(board[1]/2)
//     // 방향에 따라 카운트 ++ 
//     let x = 0; let y = 0;
    
//     for(let i = 0; i < keyinput.length; i++){
//         if(keyinput[i] === "right"){
//             x++
//         }else if(keyinput[i] === "left"){
//             x--
//         }else if(keyinput[i] === "up"){
//             y++
//         }else if(keyinput[i] === "down"){
//             y--
//         }
//     }
    
//     let rightLeft = x; let upDown = y;
    
//         if(Math.abs(rightLeft)> Math.abs(Math.floor(board[0] / 2))){
//             rightLeft = rightLeft > 0 ? Math.abs(Math.floor(board[0] / 2)) : Math.abs(Math.floor(board[0] / 2)) * -1;
//          }
//         if(Math.abs(upDown)> Math.abs(Math.floor(board[1]/2))){
//             upDown = upDown > 0 ? Math.abs(Math.floor(board[1]/2)) : Math.abs(Math.floor(board[1]/2)) * -1;
//         }
       
//     result.push(rightLeft, upDown)
    
//     return result;
// }

function solution(keyinput, board) {
  	// 1. x,y 좌표를 선언한다.
    let x = 0;
    let y = 0;
    
  	// 2. board의 범위도 설정한다. 
    const range = 
          [ Math.abs( Math.floor(board[0] / 2) ), 
           Math.abs( Math.floor(board[1] / 2) ) ];
    
  	// 3. keyinput에 방향이 입력된다면 그에 맞게 x 또는 y 좌표를 변경한다.
    for(let k of keyinput){
        switch(k){
            case "left": x--; break;
            case "right": x++; break;
            case "down": y--; break;
            case "up": y++; break;
        }
        
      	// 4. x와 y의 값이 설정 범위를 넘어간다면 설정된 범위의 최댓값을 대입한다.
        if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        }
        
    }
    return [x,y];
}