// Pontuação: 100/100

var N,I,P;
scanf("%d%d%d","N","I","P");
I = (I+P)%N;
if(I === 0) I = N;
printf("%d\n",I);
