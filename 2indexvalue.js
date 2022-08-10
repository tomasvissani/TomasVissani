let numeros1 = [20,15,8,10,91,52]
let palabra = "value"
function min(numeros1,palabra){
    let minimo=0
    if(palabra=="index"){
        minimo = Math.min.apply(null, numeros1);
        console.log(minimo)    
    }
    if(palabra=="value"){
        minimo = Math.min.apply(null, numeros1);
        for(let i=0; i<numeros1.length;i++){
            if(numeros1[i]==minimo){
                console.log(i)
            }
        }
    }
}
min(numeros1,palabra)


