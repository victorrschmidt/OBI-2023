// Pontuação: 39/100

var e,m,d,i,a,b,gp,want=[],nowant=[],count=0,x,y,z,j;
scanf("%d%d%d","e","m","d");

for(i=0;i<m;i++){
  scanf("%d%d","a","b");
  want.push([a,b]); 
}
for(i=0;i<d;i++){
  scanf("%d%d","a","b"); 
  nowant.push([a,b]);
}
for(i=0;i<e/3;i++){
  scanf("%d%d%d","x","y","z");
  gp = [x,y,z];
  for(j = 0; j < want.length; j++){
    if(want.length > 0 && (gp.indexOf(want[j][0]) == -1 && gp.indexOf(want[j][1]) != -1) ||
      (gp.indexOf(want[j][1]) == -1 && gp.indexOf(want[j][0]) != -1)){
      count++;
      want.splice(j,1);
      j--; 
    }

  }
  for(j = 0; j < nowant.length; j++){
    if(nowant.length > 0 && (gp.indexOf(nowant[j][0]) != -1 && gp.indexOf(nowant[j][1]) != -1)){  
      count++;
      nowant.splice(j,1);
      j--; 
    }
  } 
}
printf("%d\n",count);
