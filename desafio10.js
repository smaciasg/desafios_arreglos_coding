// Ejercicio 1: determinar si estaba presente un cierto valor? Escribe una función llamada isPresent2d(arr2d, value)que devuelva true si el valor está presente y false en caso contrario.

var arr2d = [ [2, 5, 8],
              [3, 5, 1, 7, 7],
              [7, 0, 7, 0 ,7] ];

function isPresent2d(arr, value){
    var todas_positions=[];
    for(var i=0;i<arr.length;i++){
        var posicion = [];
        var posicion_interna=[];
        var contar = 0
        for(var j=0;j<arr[i].length;j++){
            if(arr[i][j] === value){
                posicion_interna.push(j);
                contar +=1;
                if(contar<=1){
                    posicion.push("Posición general en el arreglo: ");
                    posicion.push(i);
                    posicion.push("Posición específica: ");
                    posicion.push(posicion_interna);
                    todas_positions.push(posicion);
                }
            }
        }
    }
    return todas_positions
}

console.log(isPresent2d(arr2d,0))
