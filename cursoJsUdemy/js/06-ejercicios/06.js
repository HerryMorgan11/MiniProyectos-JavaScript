let objeto = { id: 1, name: 'David' };

function crearCopia(obj) {
    let objeto2 = {};
    for(let llave in obj) {
        objeto2[llave] = obj[llave];
    }

    return objeto2;
}

let obj2 = crearCopia(objeto);

console.log(obj2);