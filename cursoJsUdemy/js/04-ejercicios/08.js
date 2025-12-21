let array = [
    {id: 1, name: "Nicolas"} ,
    {id: 2, name: "Felipe"},
    {id: 3, name: "Chanchito"},
];

/* Tengo que mostrar este resultado
let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Chanchito"}]
];
*/
// Creamos un array general y dentro de este array creamos diferentes arrays.
/*
function toPairs(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        let arrayCambio = [i, arr[i]];
        pares.push(arrayCambio);
    };
    return pares;
}
*/

function toPairs(arr) {
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento];
    }

    return pares;
}

let resultado = toPairs(array);
console.log(resultado);

