function createUsuario(name) {
    return {
        id: Math.random(),
        nombre: name,
    }
}

let user1 = createUsuario("David");
let user2 = createUsuario("Luis Miguel")
console.log(user1, user2);