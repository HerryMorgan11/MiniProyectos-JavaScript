const saludo = "HOLA MUNDO";

const depedida = new String("Adios :(");

console.log(saludo);

console.log(saludo.indexOf("MU"));  // Nos dice la posición
console.log(saludo.includes("MU")); // Nos dice si esta incluido o no true o false
console.log(saludo.replace("Mundo", "Nicolas"));
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());

console.log(saludo.substring(0, 4));

const espacios = " HOLA MUNDO !"
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());