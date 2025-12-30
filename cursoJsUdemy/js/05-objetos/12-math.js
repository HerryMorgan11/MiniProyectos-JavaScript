console.log(Math.PI,
            Math.abs(-15), // Valor absoluto de un numero
            Math.round(10.25), // Redondea
            Math.floor(15.9), //Redondea hacia abajo.
            Math.ceil(10.6), //Redondea hacia arriba
            Math.pow(2, 3), //La potencia de un numero 2 elevado 3 
            Math.sqrt(9) // Raiz cuardrada de 9
        ); 

console.log(Math.random()) // Generador de numeros aleatorios

function getRandom(min, max) {
    return Math.random() * (max-min)+1;
}

console.log(getRandom(1, 10))