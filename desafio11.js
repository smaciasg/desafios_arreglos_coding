// Ejercicio: Dada un arreglo bidimensional (un arreglo que contiene arreglos), devuelve un nuevo arreglo que contenga solo los valores del interior de los subarreglos

function flatten(arr2d) {
    var flat = [];
    for(var i=0; i<arr2d.length;i++){
        if(typeof arr2d[i] === 'object'){
            for(var j=0;j<arr2d[i].length;j++){
                flat.push(arr2d[i][j])
            }
        } else {
            flat.push(arr2d[i])
        }
    }
    return flat;
}
    
var result = flatten( [ 2, "hola mundo", [3, 6, 1], [5, 7, 7] ] );
console.log(result); // esperamos obtener de vuelta [2, "hola mundo", 3, 6, 1, 5, 7, 7]