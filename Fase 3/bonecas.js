// Pontuação: 13/100

var B,T;
scanf("%d%d","B","T");

var tamanhos = Array(B);

for(var i = 0; i < B; i++){
	scanf("%d","tamanhos[i]");
}

tamanhos.sort(function(a,b){return b-a;});

var ans = 0;

for(var i = T; T; i += 2){
	ans += Math.pow(tamanhos[i]-tamanhos[i+1],2);
    T--;	
}

printf("%d\n",ans);
