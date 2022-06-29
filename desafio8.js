// Usando el siguiente arreglo, escribe una función que responda a todas nuestras preguntas eligiendo una respuesta al azar.

var respuestaCotidiana = [
    "Es seguro.",
    "Es decididamente así.",
    "Sin duda.",
    "Sí, definitivamente.",
    "Puedes confiar en ello.",
    "Como yo lo veo, sí.",
    "Es lo más probable.",
    "Pinta bien.",
    "Sí.",
    "Las señales apuntan a que sí.",
    "Respuesta confusa, intenta otra vez.",
    "Pregunta de nuevo más tarde.",
    "Mejor no decirte ahora.",
    "No se puede predecir ahora.",
    "Concéntrate y pregunta otra vez.",
    "No cuentes con eso",
    "Mi respuesta es no.",
    "Mis fuentes dicen que no.",
    "No pinta bien",
    "Muy dudoso."
];

function respuesta(arreglo){
    var num_pregunta = Math.floor(Math.random()*(arreglo.length));
    var respuesta = arreglo[num_pregunta];
    return respuesta
}

var respuesta_adivina = respuesta(respuestaCotidiana);
console.log(respuesta_adivina)

