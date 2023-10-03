// Pontuação: 14/100

var C,M;
scanf("%d%d","C","M");

var tempo_carro = Array(C);
for(var i = 0; i < C; i++){
	scanf("%d","tempo_carro[i]");
}

tempo_carro.sort(function(a,b){return a-b;});

var mec;
scanf("%d","mec");

var total = [0];

for(var i = 1; i < C; i++){
	var t = (mec * tempo_carro[i-1]);
    total[i] = t+total[i-1];
}

var ans = 0;

for(var i = 1; i < C; i++){
	ans += total[i];
}
   
printf("%d\n",ans);
