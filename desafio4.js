// Arreglo invertido
// Escribe una función que invierta los valores de un arreglo y los devuelva.

function invertir_arr(arr) {
    var new_arr =[];
    for(var i=(arr.length)-1;i>=0;i--){
        new_arr.push(arr[i]);
    }
    return new_arr
}

var arr_ivertido = invertir_arr(["a","b","c","d","e"]);
console.log(arr_ivertido);