let objeto = { name: 'David' };

function agregarId(obj) {
    return obj.id = Math.random();
}

agregarId(objeto);

console.log(objeto);