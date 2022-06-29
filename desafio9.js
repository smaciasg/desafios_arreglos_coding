var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


console.log("\n-----------------------------------------\nEjercicio 1. Devolver con console.log los nombres de los Pokemones que tienen un id mayor que 99.\nSolución:\n");

for(var i=0;i<pokemon.length;i++){
    if(pokemon[i].id > 99){
        console.log(pokemon[i].name)
    }
}

console.log("\n-----------------------------------------\nEjercicio 2. Imprime en la consola (console.log) los objetos Pokémon cuyo id es divisible por 3\nSolución:\n");

for(var i=0;i<pokemon.length;i++){
    if(pokemon[i].id %3 ===0){
        console.log(pokemon[i])
    }
}

console.log("\n-----------------------------------------\nEjercicio 3. Imprime en la consola (console.log) los objetos Pokémon que tienen más de un tipo\nSolución:\n");

for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].types.length >1){
        console.log(pokemon[i])
    }
}

console.log("\n-----------------------------------------\nEjercicio 4. Imprime en la consola (console.log) los nombres de los Pokemones cuyo único tipo sea “veneno”\nSolución:\n");

for(var i=0;i<pokemon.length;i++){
    if((pokemon[i].types[0] ==="poison") && (pokemon[i].types.length ===1)){
        console.log(pokemon[i].name)
    }
}

console.log("\n-----------------------------------------\nEjercicio 5. Imprime en la consola (console.log)  el primer tipo de todos los Pokemones cuyo segundo tipo sea “volador”\nSolución:\n");

for(var i=0;i<pokemon.length;i++){
    if(pokemon[i].types[1] ==="flying"){
        console.log(pokemon[i].types[0])
    }
}

console.log("\n-----------------------------------------\nEjercicio 6. Imprime en la consola  console.log los nombres al revés de los Pokemones cuyo único tipo sea “veneno”\nSolución:\n");

for(var i=0;i<pokemon.length;i++){
    if((pokemon[i].types[0] ==="poison") && (pokemon[i].types.length ===1)){
        var name_poke = pokemon[i].name;
        var name_poke_reversa= "";
        for(var j=name_poke.length-1;j>=0;j--){
            name_poke_reversa += name_poke[j];
        }
        console.log("Nombre pokemon es: "+name_poke+" // Nombre al revés es: "+name_poke_reversa)
    }
}