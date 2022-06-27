// Arreglo de Fibonacci
// Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
function fibinaccioarray(n){
    var fiArr = [0,1];
    var longitud_fiArr = fiArr.length;
    while (longitud_fiArr<n){
        let num1 = fiArr[(fiArr.length)-1];
        let num2 = fiArr[(fiArr.length)-2];
        let num_add = num1+num2;
        fiArr.push(num_add);
        longitud_fiArr = fiArr.length;
    }
    return fiArr;
}

var result = fibinaccioarray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
