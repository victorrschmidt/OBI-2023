// Pontuação: 100/100

var n,str,c,rep=1,log=[];
scanf("%d%s","n","str");
c = str[0];
for(i=1;i<n;i++){
  if(str[i]!=c){
    log.push(rep,c);
    c = str[i];
    rep = 1;
  }
  else rep++; 
}
log.push(rep,c);
log = log.join(" ");
printf("%s\n",log);
