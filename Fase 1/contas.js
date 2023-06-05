// Pontuação: 100/100

var v, c, min, i, con;
c = [];
scanf("%d%d%d%d","v","c[0]","c[1]","c[2]");

con = 0;

 for(i = 0; i < 3; i++){
    min = Math.min.apply(null, c);
    var b = c.indexOf(min);
    if(min > v){
      break;
    }
    else{
      v -= min;
      c.splice(b,1);
      con++;   
    }
  }
printf("%d\n",con);
