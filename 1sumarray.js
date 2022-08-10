let numeros = [0,1,2,3,4,5,6,7,8,9]
let num = 57857878
function sumArray(numeros,num){
    let suma = 0
    let aux = false
    for(let i=0; i<numeros.length; i++){
        for(let j=0; j<numeros.length; j++){
            suma=numeros[i]+numeros[j]
            if(num==suma){
                aux=true
            }
        }
    }
    return aux;
}

const result=sumArray(numeros,num)
console.log(result)