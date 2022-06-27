// Mejor que el promedio
// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.

function mayor_que_promedio(arr){
    var sum_arr = 0;
    for(var i=0;i<=(arr.length)-1;i++){
        sum_arr = sum_arr+arr[i];
    };
    var prom_arr = sum_arr/(arr.length);
    var contar = 0;
    for(var i=0;i<=(arr.length)*1;i++){
        if(arr[i]>prom_arr){
            contar +=1;
        };
    }
    return contar;
}

var result = mayor_que_promedio([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
