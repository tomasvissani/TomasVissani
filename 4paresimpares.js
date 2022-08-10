function paresImpares(){
    let parametro1 = 8
    let parametro2 = 4
    let parametro3 = "mundos"
    for(i = 0; i<=parametro1; i++){
        if(i%2 === 0 || i === 0){
            if(i % parametro2 === 0){
                console.log(parametro3)   
            }else{
                console.log(i)
            }

        }
    }
    for(j = 0; j<=parametro1; j++){ 
        console.log(j)
    }
}

let print1 = paresImpares()
console.log(print1)