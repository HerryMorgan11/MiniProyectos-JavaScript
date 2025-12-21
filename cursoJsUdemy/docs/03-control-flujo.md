# 03 — Control de flujo (Control Flow) 🔁

En este módulo se explican las estructuras de control de flujo fundamentales en JavaScript: condicionales (`if/else`, `switch`) y bucles (`while`, `do..while`, `for`, `for..of`, `for..in`) junto con el uso de `break` y `continue`. A continuación, por cada archivo, se detalla qué se usa, por qué y se muestra el código del ejercicio.

---

## `01-if.js` 🧭

**Qué se usa:**
- Condicional `if`.
- Bloques con `{}` y la forma en una sola línea cuando solo hay una expresión.

**Por qué se usan:**
- Permiten ejecutar código solo cuando se cumple una condición.
- Usar o no llaves depende de la claridad y buenas prácticas; aunque la sintaxis permite una sola línea sin llaves, las llaves mejoran la legibilidad.

**Ejemplo (archivo):**
```javascript
// Si solo contiene una unica expresion no es necesario usar llaves {}
let edad = 20;
if (edad > 17) {
    console.log('Usuario mayor de edad');
}

if (edad > 17) console.log('Usuario mayor de edad en una linea');
```

**Notas prácticas:**
- Prefiere usar llaves para evitar errores si posteriormente añades más instrucciones al bloque.
- Evita condiciones complejas dentro de un `if` sin descomponer en variables intermedias.

---

## `02-else.js` 🔀

**Qué se usa:**
- `if`, `else if`, `else` para ramificar varias condiciones.

**Por qué se usan:**
- Permiten manejar distintos casos mutuamente excluyentes en orden de prioridad.

**Ejemplo (archivo):**
```javascript
let edad = 15;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if(edad > 13){
    console.log('Usuario necesita ir acompañado');
} else {
    console.log('Usuario menor de edad');
}
```

**Notas prácticas:**
- Ordena las condiciones de mayor a menor especificidad para que las ramas correctas se evalúen primero.
- Si los bloques comparten lógica, extrae la comprobación a funciones para evitar duplicación.

---

## `03-while.js` 🔁

**Qué se usa:**
- Bucle `while` con una condición evaluada antes de cada iteración.

**Por qué se usan:**
- Para repetir un bloque de código mientras se cumpla una condición dinámica (p. ej. lectura de datos, procesos hasta un estado concreto).

**Ejemplo (archivo):**
```javascript
// Cuales son los numeros pares.

let i = 0;
while (i < 10) {
    if (i % 2 === 0) {
        console.log('Numero par',i);
    }
    
    i++;  // Incrementamos i para evitar bucle infinito
}
console.log("Fin del ciclo while");
```

**Notas prácticas:**
- Asegúrate de que la condición pueda volverse falsa (incrementos, cambios de estado) para evitar bucles infinitos.
- Usa `while(true)` con `break` solo cuando tenga sentido claro (p. ej. consumo de datos hasta EOF).

---

## `04-loop-infinito.js` ⚠️

**Qué se usa:**
- Ejemplo de bucle que, sin control adecuado, puede convertir-se en un bucle infinito.

**Por qué se usa:**
- Ilustrar el peligro de olvidar actualizar el estado que controla la condición del bucle.

**Ejemplo (archivo):**
```javascript
// Loop infinito - No tiene un break que detenga la ejecucion del ciclo rompe el navegador
let i = 0;

while (i < 10) {   
    console.log('Numero par',i);
    i++;  
}
```

**Notas prácticas:**
- Nunca dejes loops sin una condición o mecanismo de salida comprobado.
- Para depuración, añade límites o logs que permitan detectar si un bucle se ejecuta más de lo esperado.

---

## `05-do-while.js` 🔄

**Qué se usa:**
- `do { ... } while (condicion)` que ejecuta el bloque al menos una vez y luego evalúa la condición.

**Por qué se usan:**
- Útil cuando hay que ejecutar una acción mínima antes de comprobar si repetirla (p. ej. mostrar un prompt y repetir hasta entrada válida).

**Ejemplo (archivo):**
```javascript
let i = 2;

while (i < 2) {
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}

// Do While
// Siempre ejecuta el codigo y luego comprueba que se cumple la condición
do {
    if(i % 2 === 0){
        console.log('do while',i);
    }
    i++;

} while (i < 2);
```

**Notas prácticas:**
- Ten claro que el bloque se ejecuta al menos una vez; no lo uses si la primera ejecución puede ser indeseada.

---

## `06-for.js` 🔁

**Qué se usa:**
- Bucle `for` clásico con inicialización, condición y actualización (`for (let i = 0; i < n; i++)`).

**Por qué se usan:**
- Ideal para iterar un número conocido de veces o cuando se necesita un índice controlado.

**Ejemplo (archivo):**
```javascript
for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('For Numero par',i);
    }
}
```

**Notas prácticas:**
- Prefiere `for` cuando necesites acceder al índice o controlar con precisión el incremento.
- Para arrays, considera `for..of` si no necesitas el índice.

---

## `07-for-of.js` 🐾

**Qué se usa:**
- `for (let item of iterable)` para iterar directamente sobre valores de arrays y otros iterables.

**Por qué se usan:**
- Sintaxis limpia y legible cuando quieres los valores y no los índices.

**Ejemplo (archivo):**
```javascript
let animales = ['Perro', 'Gato', 'Tigre', 'Leon'];

for (let animal of animales) {
    console.log('For Of', animal);
}
```

**Notas prácticas:**
- No usar `for..of` si necesitas modificar el array por índice (usa `for` o `forEach`).

---

## `08-for-in.js` 🔑

**Qué se usa:**
- `for (let key in object)` para iterar propiedades enumerables de objetos y también índices de arrays (como cadenas de índices).

**Por qué se usan:**
- Útil para recorrer las claves de un objeto cuando necesitas tanto la propiedad como su valor.

**Ejemplo (archivo):**
```javascript
let user =  {
    id: 1,
    name: 'David',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop])
}

let animales = ['Perro', 'Gato', 'Tortuga'];

for (let index in animales) {
    console.log(index, animales[index])
}
```

**Notas prácticas:**
- Ten en cuenta que `for..in` itera claves (propiedades), no valores; para arrays `for..of` suele ser más apropiado.
- Evita usar `for..in` para arrays si el orden o propiedades heredadas pueden afectar el resultado.

---

## `09-break-continue.js` ⛔️➡️

**Qué se usa:**
- `continue` para saltar a la siguiente iteración.
- `break` para salir por completo del bucle.

**Por qué se usan:**
- Control fino sobre la ejecución dentro de bucles: ignorar casos o terminar cuando se cumple una condición.

**Ejemplo (archivo):**
```javascript
let i = 0;
while (i < 6) {
    i++;

    if (i === 2) {
        continue;   // Si i es 2, se salta el resto y vuelve al inicio
    }

    if (i === 4) {
        break;      // Si i es 4, se sale del bucle
    }
    console.log(i)
}
```

**Notas prácticas:**
- Usa `continue` y `break` con moderación; abusarlos puede reducir la claridad del flujo.
- Funcionan en todos los tipos de bucles (`for`, `while`, `for..of`, etc.).

---

## `10-switch.js` 🔁🧾

**Qué se usa:**
- `switch` con `case` y `default`, y `break` para evitar "fall-through".

**Por qué se usan:**
- Cuando hay múltiples valores discretos a comprobar sobre la misma expresión, `switch` puede ser más legible que varias ramas `if`.

**Ejemplo (archivo):**
```javascript
let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accción de listar');
        break;
    case 'guardar':     
        console.log('acción de guardar')
        break;
    default:
        console.log('No se reconoce la acción');
        break;
}
```

**Notas prácticas:**
- No olvides `break` si no quieres que se ejecute el siguiente `case` (fall-through).
- Para rangos o condiciones complejas, `if/else` o mapear a funciones suele ser más apropiado.

---

## Siguientes pasos ✨

- Puedo añadir ejemplos de ejercicios y pruebas para cada sección.
- ¿Quieres que actualice también el `README` de `docs` para enlazar este nuevo fichero? Dime cómo prefieres proceder.
