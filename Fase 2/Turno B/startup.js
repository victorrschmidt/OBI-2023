// Pontuação: 25/100

var N,salarios,sub,tree,chefe,id,sup,A,ans=0;
scanf("%d%d%d","N","id","chefe");
salarios = [chefe];
sub = [0];
tree = Array(N).fill().map(function (){ return []; });
con = Array(N).fill(true);

for(var i = 1; i < N; i++){
  scanf("%d%d","sup","num");
  sup--;
  salarios[i] = num;  
  sub[i] = sup; 
  tree[sup].push(i);
  if(con[sup] && salarios[sup] < num){
    ans++;
    con[sup] = false;
  }
}
printf("%d\n",ans);

scanf("%d","A");
for(var i = 0; i < A; i++){ 
  scanf("%d%d","id","num");
  id--;  
  salarios[id] = num;
  chefe = sub[id];
  for(j = 0; j < tree[chefe].length; j++){
    if(salarios[tree[chefe][j]] > salarios[chefe]) break;
  }
  if(j == tree[chefe].length && !con[chefe]){ 
    ans--;
    con[chefe] = true; 
  }
  else if(j != tree[chefe].length && con[chefe]){
    ans++;
    con[chefe] = false; 
  }
  printf("%d\n",ans);
}
