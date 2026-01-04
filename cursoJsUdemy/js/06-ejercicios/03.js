function similares(obj1, obj2) {
    let distintos = false;

    for(let llave in obj1) {
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
        }
    }

    return !distintos;
}

let comparacion = similares(
    {id: 1, nombre: "David"},
    {id: 1, nombre: "David"},
)

console.log(comparacion);