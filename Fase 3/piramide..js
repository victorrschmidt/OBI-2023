// Pontuação: 100/100

var arr = Array(6);
var soma = 0;

for(var i = 0; i < 6; i++){
	scanf("%d","arr[i]");
    soma += arr[i];
}

soma /= 3;

var ans = 'N';

var topo = false;
for(var i = 0; i < 6; i++){
	if(arr[i] == soma){
        arr.splice(i,1);
		topo = true;
        break;
    }
}

var meio = false;
for(var i = 0; i < arr.length; i++){
	var k = arr[i];
   	for(var j = i+1; j < arr.length; j++){
		k += arr[j];
        if(k == soma){
			arr[i] = -1;
           	arr[j] = -1;
            meio = true;
            break;
        }
        k -= arr[j];
    }
	if(meio) break; 
}

var base = false;
for(var i = 0,k = 0; i < arr.length; i++){
    if(arr[i] != -1){
	    k += arr[i];
	}
}

if(k == soma){
	base = true;
}

if(topo && meio && base) ans = 'S';

printf("%s\n",ans);
