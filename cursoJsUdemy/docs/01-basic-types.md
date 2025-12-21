# 01 — Basic Types (Tipos básicos) 🔹

En este módulo se tratan elementos fundamentales de JavaScript: objetos, arrays y funciones. Abajo encontrarás, por cada archivo, una explicación de los elementos usados y por qué se usan, seguida del ejemplo (código original).

---

## `01-objetos.js` 🧩

**Qué se usa:**
- Declaración de variables con `let`.
- Literal de objeto ( `{ ... }` ) para agrupar propiedades relacionadas.
- Acceso a propiedades con `.` y con `['prop']`.
- Uso de una variable como clave: `personaje[llave]` (acceso computado).
- Modificación de propiedades y eliminación con `delete`.

**Por qué se usan:**
- Un objeto permite representar una entidad (por ejemplo, un personaje) con múltiples atributos y nombres asociados (propiedades). Es ideal cuando los datos tienen nombre/clave.
- Acceder con `.` es más legible; con `[]` se puede usar una variable como nombre de propiedad o propiedades con nombres dinámicos.
- `delete` se usa para quitar una propiedad del objeto cuando ya no es necesaria.

**Ejemplo (archivo):**
```javascript
// Personajes de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 15;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 15,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 20; 
personaje['edad'] = 25;

let llave = 'nombre';
personaje[llave] = "Nezuko";

delete personaje.anime;
console.log(personaje);
```

**Notas prácticas:**
- Los objetos son tipos por referencia: si asignas `let b = personaje`, `b` y `personaje` apuntan al mismo objeto.
- No confundas `delete` con poner la propiedad a `undefined`; `delete` elimina la clave del objeto.

---

## `02-arrays.js` 🐾

**Qué se usa:**
- Array literal `[ ... ]` para lista ordenada de elementos.
- Índices (ej. `animales[0]`) para acceder a elementos.
- Asignación a índices mayores para crear huecos (arrays "sparse").
- `length` para obtener el tamaño (incluye huecos).
- `typeof` sobre arrays devuelve `"object"` (porque internamente son objetos especiales).

**Por qué se usan:**
- Los arrays representan colecciones ordenadas cuando el orden y la posición son relevantes (listas, colas, etc.).
- `length` es útil para bucles y conocer dimensión; ojo con huecos: `length` refleja la mayor posición+1.

**Ejemplo (archivo):**
```javascript
let animales =['perro', 'gato'];

console.log(animales);
console.log(animales[0]);

animales[2] = 'pez';
console.log(animales); 

animales[10] = 'pez';
console.log(animales);
console.log(animales[7]); // undefined porque esta empty
console.log(typeof animales)

console.log(animales.length); // incluye los vacíos
```

**Notas prácticas:**
- Evita usar índices muy dispersos si buscas una lista compacta; para operaciones típicas (añadir/quitar) usa métodos (`push`, `pop`, `splice`, etc.).
- `undefined` aparece cuando una posición no tiene valor asignado.

---

## `03-funciones.js` 🔁

**Qué se usa:**
- Declaración de función con la sintaxis `function nombre() { ... }`.
- Llamada a la función por su nombre: `saludar()`.
- `return` para devolver un valor.

**Por qué se usan:**
- Las funciones encapsulan comportamiento reutilizable: evitar duplicar código y representar operaciones concretas.
- `return` permite obtener resultados y usarlos para otras operaciones.

**Ejemplo (archivo):**
```javascript
function saludar() {
    console.log("Hola Mundo");
}

saludar();

function suma() {
    return 2 + 2;
}

console.log(suma());
```

**Notas prácticas:**
- Las funciones sin `return` devuelven `undefined` por defecto.
- En JavaScript existen además funciones flecha (=>) y expresiones de función; aquí se usa la forma declarada.

---

## `04-argumentos.js` 🧾

**Qué se usa:**
- Parámetro en la definición de función (`function suma(a) { ... }`).
- Paso de argumento al invocar (`suma(5)`).

**Por qué se usan:**
- Parámetros son variables locales que la función usa para operar; argumentos son los valores concretos pasados.
- Permiten que una función sea genérica y reutilizable con distintos datos.

**Ejemplo (archivo):**
```javascript
// Este dato (a) es el parámetro    
function suma(a) {
    return a + 2;
}
                // Este dato (5) es el argumento
let resultado = suma(5);
console.log(resultado);
```

**Notas prácticas:**
- Si no pasas argumento, el parámetro será `undefined` — ten cuidado al operar sobre él.

---

## Siguientes pasos ✨

- Puedo generar más detalles (por ejemplo, mostrar ejemplos de errores comunes, añadir enlaces a la MDN o ejemplos interactivos).
- Dime si prefieres un archivo independiente por ejercicio (más granular) o continuar con esta organización por módulo.
