var n, c, v, i, C, V;
scanf("%d","n");
c = [];
v = [];
d = [];

for(i = 0; i < n; i++){
  scanf("%s","c[i]");
  scanf("%d","v[i]");
  if(i == 0){
    C = c[0];
    V = v[0];
  }
  else if(v[i] > V) {
    V = v[i];
    C = c[i];
  }
}
printf("%s\n",C);
printf("%d\n",V);
