let nombre=["pedro","juan","diego","henrique"],habil=[[70,60,75],[90,86,50],[25,50,100],[70,80,90]],prom;

for(let i=0;i<nombre.length;i++){
    prom=0
    for(let j=0;j<3;j++){
        prom=prom+habil[i][j];
    }
    prom=prom/3
    console.log(nombre[i]+": "+prom.toString().substring(0,4));
    if(prom>=70){
        console.log("si califica")
    }else{
        console.log("no califica")
    }
}