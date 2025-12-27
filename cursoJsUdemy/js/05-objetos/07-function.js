function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('dibujando...');
    }
}

// Lo que hacemos es declarar otro objeto z y por tanto al llamar a la función this tambien llamara a c a parte de x y
let punto = {z: 7};
Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);
console.log(punto)
/*
const Point = new Function ('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('dibujando...');
    }
    `);

const p = new Point(1, 2);
console.log(p);
*/