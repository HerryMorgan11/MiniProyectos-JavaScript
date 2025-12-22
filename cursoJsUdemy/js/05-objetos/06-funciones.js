function Usuario (nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);  // Nombre de la función
console.log(Usuario.length) // Cantidad de argumentos de la función

const U = Usuario;
let user = new U("Nicolas");

console.log(user)

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'David')
console.log(user1)

// Esto retorna una funcion
function returned() {
    return function() {
        console.log("Hola Mundo")
    }
}

// Le asignamos la funcion a saludo por lo que pasa a ser una función
let saludo = returned();
saludo();