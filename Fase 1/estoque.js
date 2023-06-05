var m, n, v, p, l, i, j, ven;
v = [];
ven = 0;

scanf("%d%d","m","n");

for(i = 0; i < m*n; i++){
  scanf("%d","v[i]");
}
scanf("%d","p");

for(l = 0; l < p; l++){
  scanf("%d","i");
  scanf("%d","j");
   
  if(v[(i*n)-n+j-1] !== 0){
    ven++;
    v[(i*n)-n+j-1]--;
  }
}
printf("%d\n",ven);
