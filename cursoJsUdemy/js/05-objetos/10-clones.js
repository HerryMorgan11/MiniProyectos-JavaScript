let punto = {
    x: 10,
    y: 15,
};

// Si metemos un dato que insertamos con punto y lo ponemos como otra propiedad al lado de la z se toma ese valor.
let clonePunto = Object.assign({}, punto, { z: 20 });

let copiaPunto = Object.assign({}, punto);

console.log( punto, clonePunto)

// Genera copia exacta de punto
let copia3 = { ...punto };

// Forma antigua
let copia4 = {};

for (let llave in punto) {
    copia4[llave] = punto[llave];
}