// Contar positivos

var contarPositivos = 0;
var contar_estrito_positivo =0
var numeros = [3, 4, -2, 7, 16, -8, 0];

for(var i=0; i<numeros.length; i++){
    if(numeros[i]>=0){
        contarPositivos++
    }
    if (numeros[i]>0){
        contar_estrito_positivo++
    }
}

console.log("hay " + contarPositivos + " valores positivos");
console.log("hay " + contar_estrito_positivo + " valores estrictamente positivos")
