// Pontuação: 11/100

var V,E,K;
scanf("%d%d%d","V","E","K");

var adj = Array(V+1);

for(var i = 1; i <= V; i++){
	adj[i] = [];
}

var visitado = Array(V+1).fill(false);

var p;
scanf("%d","p");

for(var i = 0; i < E; i++){
	var u,v,z;
	scanf("%d%d%d","u","v","z");
   
    adj[u].push(v);
    adj[v].push(u);
}

var inicio,fim,ans;
scanf("%d%d","inicio","fim");

function bfs(inicio,fim){
	if(inicio == fim) return p;
    
    var fila = [inicio];
	visitado[inicio] = true;
   
    while(fila.length){
		var v = fila.shift();
         
        for(var i = 0; i < adj[v].length; i++){
			var proximo = adj[v][i];
           
            if(proximo == fim){
				return p;
            }
           
			if(!visitado[proximo]){
				fila.push(proximo);
				visitado[proximo] = true;
            }	
        }
    }
   
	return -1;
}

if(inicio == fim){ 
   ans = 0;
}
else{
   ans = bfs(inicio,fim);   
}

printf("%d\n",ans);
