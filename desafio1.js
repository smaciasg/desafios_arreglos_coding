// Siempre hambriento
// Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.

function siempreHambirento(arr){
    let contador =0;
    let deli = [];
    for(var i=0;i<=(arr.length)-1;i++){
        if(arr[i] === "comida"){
            deli.push("Delicioso");
        } else {
            contador += 1; 
        }
    };
    if(contador === (arr.length)){
        return("Tengo Hambre");
    } else {
        return(deli.toString());
    }
};

var alwaysHungry = [3.14, "comida", "pastel", true, "comida"];
console.log(siempreHambirento(alwaysHungry));
// esto debería mostrar "delicioso, "delicioso"
var alwaysHungry1= [4, 1, 5, 7, 2];
console.log(siempreHambirento(alwaysHungry1));
// esto debería mostrar "Tengo hambre"
