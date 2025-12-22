// Al definir como constante fuerzo a no poder cambiar el nombre de la variables "user".
const user = { id: 1 };

// No se puede cambiar el nombre de la variable pero si puedo añadir variables al objeto o eliminarlas.
user.name = 'Nicolas';
user.guardar = function() {
    console.log('Guardando', user.name);
};

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

// Creo un nuevo objeto user1, al poner Object.freeze no puedo cambiar ni el nombre de la variable, ni las variables del objeto.
const user1 = Object.freeze({ id: 1 });

user1.id = 2;
user1.name = "Nicolas"

// Object.seal me permite cambiar el valor de la variable del objeto.
const user2 = Object.seal({ id: 1 });

user2.id = 2;

console.log(user1);
console.log(user2);
