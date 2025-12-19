let i = 2;

while (i < 2) {
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}

// Do While
// Siempre ejecuta el codigo y luego comprueba que se cumple la condición
do {
    if(i % 2 === 0){
        console.log('do while',i);
    }
    i++;

} while (i < 2);