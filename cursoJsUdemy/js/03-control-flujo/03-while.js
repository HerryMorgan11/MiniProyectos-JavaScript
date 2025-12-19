// Cuales son los numeros pares.

// Si se cumple la condicion, se ejecuta el bloque de codigo.
let i = 0;
while (i < 10) {   //Tenemos que definir el beack del loop para que no se cumpla la condición
    if (i % 2 === 0) {
        console.log('Numero par',i);
    }
    
    i++;  // Incrementamos i en 2 para obtener solo numeros pares
}
console.log("Fin del ciclo while");