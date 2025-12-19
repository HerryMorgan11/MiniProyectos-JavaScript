// Personajes de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 15;
/*
    Definición de un objeto
    Un objeto es una colección de propiedades
    Cada propiedad tiene un nombre y un valor
    Las propiedades se separan por comas
    Los objetos se definen con llaves {}
    Se llamará atributo a cada propiedad dentro del objeto
*/
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 15,
};
console.log(personaje);
// Si queremos acceder a un objeto en específico lo hacemos con el nombre del objeto y . el atributo
console.log(personaje.nombre);
// Otra manera de acceder a los atributos es con corchetes []
console.log(personaje['anime']);

// Modificar un atributo
personaje.edad = 20; 
personaje['edad'] = 25;

let llave = 'nombre';
personaje[llave] = "Nezuko"; // Modificar usando variable

delete personaje.anime; // Eliminar un atributo o propiedad al completo
console.log(personaje);