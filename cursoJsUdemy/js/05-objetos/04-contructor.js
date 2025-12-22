// Para definir un constructor tiene que empezar con mayuscula UpperCase
// {id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { // Métodos = funcion asociada a una propiedad de un objeto
        console.log("Recuperando clave");
    }
}

let usuario = new Usuario();
console.log(usuario)