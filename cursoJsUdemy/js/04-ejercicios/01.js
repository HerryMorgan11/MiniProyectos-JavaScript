function cualEsMayor(a, b) {
    return (a > b) ? a : b;
   
    /* Esta es una de las opciones correctas
    
    if (a > b) {
            return a
        } else {
            return b
        }
    */
}

let mayor = cualEsMayor(10, 5);

console.log('El numero mayor es el: ', mayor)