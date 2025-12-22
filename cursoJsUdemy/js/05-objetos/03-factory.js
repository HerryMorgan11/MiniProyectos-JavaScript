let user = {
    email: 'djacobo@gmail.com',
    name: 'David',
    activo: true,
    // Una función sin su nombre se llama funcion anónima
    recuperarClave: function (){
        console.log('Recuperando clave');
    }
} 

let user1 = {
    id: 1,
    email: 'chanchito@mundo.com',
    name: 'chanchito',
    activo: false,
    recuperarClave: function (){
        console.log('Recuperando clave');
    }
} 

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function (){
            console.log('Recuperando clave');
        }
    }
}

let user2 = crearUsuario("Nicolas","nico@gmail.com");
let user3 = crearUsuario("Felipe","felipe@gmail.com");

console.log(user2);
console.log(user3);