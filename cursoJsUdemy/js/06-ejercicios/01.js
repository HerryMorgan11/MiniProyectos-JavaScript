function Usuario(name) {
    this.id = Math.random();
    this.nombre = name;
}

let user = new Usuario("David");
let user2 = new Usuario("Luis Miguel");
console.log(user, user2);