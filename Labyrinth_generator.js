/**
 * 迷路生成アルゴリズム
 * @customfunction
 */
 function Labyrinth_generator(column,row){
  var tmp = [];
  for(i=0;i<row;i++){
    var tmp2=[]
    for(j=0;j<column;j++){
      tmp2.push(0)
    }
    tmp.push(tmp2)
  }
  tmp[0][0]=11
  console.log(tmp)
  var s = 0
  var t = 0
  var next_s = s
  var next_t = t
  while(true){
    while(true){
      var next_value = tmp[s][t]
      var rand = Math.floor(Math.random()*4)
      if(rand==0&&s-1>=0&&tmp[s-1][t]==0){
        if(tmp[s][t]==10){tmp[s][t]=20}
        if(tmp[s][t]==12){tmp[s][t]=23}
        if(tmp[s][t]==13){tmp[s][t]=24}
        if(tmp[s][t]==21){tmp[s][t]=31}
        if(tmp[s][t]==22){tmp[s][t]=30}
        if(tmp[s][t]==25){tmp[s][t]=32}
        if(tmp[s][t]==33){tmp[s][t]=40}
        next_s=s-1
        next_value = 10
      }
      if(rand==1&&s+1<row&&tmp[s+1][t]==0){
        if(tmp[s][t]==11){tmp[s][t]=20}
        if(tmp[s][t]==12){tmp[s][t]=22}
        if(tmp[s][t]==13){tmp[s][t]=25}
        if(tmp[s][t]==21){tmp[s][t]=33}
        if(tmp[s][t]==23){tmp[s][t]=30}
        if(tmp[s][t]==24){tmp[s][t]=32}
        if(tmp[s][t]==31){tmp[s][t]=40}
        next_s=s+1
        next_value = 11
      }
      if(rand==2&&t-1>=0&&tmp[s][t-1]==0){
        if(tmp[s][t]==10){tmp[s][t]=25}
        if(tmp[s][t]==11){tmp[s][t]=24}
        if(tmp[s][t]==12){tmp[s][t]=21}
        if(tmp[s][t]==20){tmp[s][t]=32}
        if(tmp[s][t]==22){tmp[s][t]=33}
        if(tmp[s][t]==23){tmp[s][t]=31}
        if(tmp[s][t]==30){tmp[s][t]=40}
        next_t=t-1
        next_value = 12
      }
      if(rand==3&&t+1<column&&tmp[s][t+1]==0){
        if(tmp[s][t]==10){tmp[s][t]=22}
        if(tmp[s][t]==11){tmp[s][t]=23}
        if(tmp[s][t]==13){tmp[s][t]=21}
        if(tmp[s][t]==20){tmp[s][t]=30}
        if(tmp[s][t]==24){tmp[s][t]=31}
        if(tmp[s][t]==25){tmp[s][t]=33}
        if(tmp[s][t]==32){tmp[s][t]=40}
        next_t=t+1
        next_value = 13
      }
      if((s-1<0||!(tmp[s-1][t]==0))&&(s+1>=row||!(tmp[s+1][t]==0))&&(t-1<0||!(tmp[s][t-1]==0))&&(t+1>=column||!(tmp[s][t+1]==0))){
        break;
      }
      if(s==row-1&&t==column-1){
        break;
      }
      tmp[next_s][next_t]=next_value
      s = next_s
      t = next_t
    }
    while(true){
      var rands = Math.floor(Math.random()*row)
      var randt = Math.floor(Math.random()*column)
      if(tmp[rands][randt]==0){}else{
        if((rands-1<0||tmp[rands-1][randt]==0)||(rands+1>=row||tmp[rands+1][randt]==0)||(randt-1<0||tmp[rands][randt-1]==0)||(randt>=column||tmp[rands][randt+1]==0)){
          s = rands
          t = randt
          next_s = rands
          next_t = randt
          break
        }
      }
    }

    var count = 0
    for(i=0;i<row;i++){
      if(tmp[i].indexOf(0)==-1){count++}
    }
    if(count==row){break}
  }
  if(tmp[row-1][column-1]==11){tmp[row-1][column-1]=20}else if(tmp[row-1][column-1]==13){tmp[row-1][column-1]=25}else{tmp[row-1][column-1]=32}



  for(k=0;k<tmp.length;k++){
    for(l=0;l<tmp[k].length;l++){
        if(tmp[k][l]==10){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><polygon class="cls-1" points="50 200 50 50 150 50 150 200 200 200 200 0 0 0 0 200 50 200"/></svg>'}
        if(tmp[k][l]==11){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><polygon class="cls-1" points="150 0 150 150 50 150 50 0 0 0 0 200 200 200 200 0 150 0"/></svg>'}
        if(tmp[k][l]==12){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><polygon class="cls-1" points="200 150 50 150 50 50 200 50 200 0 0 0 0 200 200 200 200 150"/></svg>'}
        if(tmp[k][l]==13){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><polygon class="cls-1" points="0 50 150 50 150 150 0 150 0 200 200 200 200 0 0 0 0 50"/></svg>'}
        if(tmp[k][l]==20){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" width="49.42" height="200"/><rect class="cls-1" x="149.42" width="50.58" height="200"/></svg>'}
        if(tmp[k][l]==21){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" y="150.58" width="200" height="49.42"/><rect class="cls-1" width="200" height="50.58"/></svg>'}
        if(tmp[k][l]==22){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" x="150" y="150.58" width="50" height="49.42"/><polygon class="cls-1" points="0 0 0 200 50 200 50 50.58 150 50.58 200 50.58 200 0 0 0"/></svg>'}
        if(tmp[k][l]==23){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" x="150.58" width="49.42" height="50"/><polygon class="cls-1" points="0 200 200 200 200 150 50.58 150 50.58 50 50.58 0 0 0 0 200"/></svg>'}
        if(tmp[k][l]==24){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" width="50" height="49.42"/><polygon class="cls-1" points="200 200 200 0 150 0 150 149.42 50 149.42 0 149.42 0 200 200 200"/></svg>'}
        if(tmp[k][l]==25){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" y="150" width="49.42" height="50"/><polygon class="cls-1" points="200 0 0 0 0 50 149.42 50 149.42 150 149.42 200 200 200 200 0"/></svg>'}
        if(tmp[k][l]==30){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" width="50" height="200"/><rect class="cls-1" x="150" y="150" width="50" height="50"/><rect class="cls-1" x="150" width="50" height="50"/></svg>'}
        if(tmp[k][l]==31){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" y="150" width="200" height="50"/><rect class="cls-1" x="150" width="50" height="50"/><rect class="cls-1" width="50" height="50"/></svg>'}
        if(tmp[k][l]==32){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" x="150" width="50" height="200"/><rect class="cls-1" width="50" height="50"/><rect class="cls-1" y="150" width="50" height="50"/></svg>'}
        if(tmp[k][l]==33){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" width="200" height="50"/><rect class="cls-1" y="150" width="50" height="50"/><rect class="cls-1" x="150" y="150" width="50" height="50"/></svg>'}
        if(tmp[k][l]==40){var html_text='<svg class="maze_wall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect class="cls-1" width="50" height="50"/><rect class="cls-1" y="150" width="50" height="50"/><rect class="cls-1" x="150" width="50" height="50"/><rect class="cls-1" x="150" y="150" width="50" height="50"/></svg>'}
        document.getElementById('marker').insertAdjacentHTML('beforeend',html_text)
    }
    document.getElementById('marker').insertAdjacentHTML('beforeend','<br>')
  }
}
