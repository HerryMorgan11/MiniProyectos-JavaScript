let animales =['perro', 'gato'];

console.log(animales);
console.log(animales[0]);

animales[2] = 'pez';
console.log(animales); 

animales[10] = 'pez';
console.log(animales);
console.log(animales[7]); // undefined porque esta empty
console.log(typeof animales) // Nos dice que es un objeto por tanto podemos acceder con . a las propiedades de los arrays

console.log(animales.length); // Nos dice la cantidad de elementos que hay en el array, incluyendo los vacíos