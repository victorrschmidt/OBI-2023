// Pontuação: 100/100

var n,i,v,max=1,aux=[],rep = new Set();
scanf("%d","n");
while(n--){
   
  scanf("%d","v");
  aux.push(v); 
   
  if(rep.has(v)){ 
    rep.clear(); 
    while(aux[0] != v){
      aux.shift();
    }
    aux.shift();
    rep = new Set(aux); 
  }
  else{
    rep.add(v); 
    max = Math.max(max,rep.size);
  }
}
printf("%d\n",max);
