let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number();
 * new Boolean; true false
 */

function Usuario() {
    this.name = "David Jacobo";
}

let user = new Usuario();
console.log(Usuario);

// Al principio es un string pero puede parsearse
const s1 = "1 + 1";
// Fuerza siempre a que sea un String fijo objeto string
const s2 = new String("1 + 1");

console.log(eval(s1))
console.log(eval(s2))