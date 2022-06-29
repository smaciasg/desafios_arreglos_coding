// Usando lo que hemos aprendido sobre la biblioteca Math en JavaScript, completa la siguiente función que debería devolver un valor entre 1 y 6 al azar.

function d6() {
    var roll = Math.random();
    roll = Math.ceil(roll*6)
    return roll;
}
 
var tiradaJugador = d6();
console.log("El jugador sumó: " + tiradaJugador);
