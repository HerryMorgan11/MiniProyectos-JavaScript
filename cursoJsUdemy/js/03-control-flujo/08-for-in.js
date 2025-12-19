let user =  {
    id: 1,
    name: 'David',
    age: 25,
};

for (let prop in user) {
    //console.log(prop)   // Esto muestra las propiedades no los valores
    console.log(prop, user[prop])
}

let animales = ['Perro', 'Gato', 'Tortuga'];

for (let index in animales) {
    console.log(index, animales[index])
}