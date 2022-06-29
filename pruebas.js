var x = 5;

function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

console.log("--------------------")

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hola, ahí"); // No hará nada ya que la función termina con return, la impresión deberá ir antes del return
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

console.log("--------------------")

var suelo = Math.floor(1.8);
var techo = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(suelo);
console.log(techo);
console.log(random);
