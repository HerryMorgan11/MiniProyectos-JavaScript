# 02 — Operators (Operadores) ⚙️

Este módulo cubre operadores básicos de JavaScript: aritméticos, de asignación, comparación, lógicos, falsy y el operador ternario. A continuación, por cada archivo, se explica qué operadores se usan, por qué y se muestra el código del ejercicio.

---

## `01-aritmeticos.js` ➕➖✖️➗

**Qué se usa:**
- Operadores aritméticos: `+ - * / % **`.
- Operadores de incremento/decremento: `a++`, `++a`, `a--`, `--a`.

**Por qué se usan:**
- Operadores aritméticos realizan cálculos básicos con números.
- `++` y `--` son atajos para sumar o restar 1; existe diferencia entre prefijo (`++a`) y sufijo (`a++`): el prefijo incrementa primero y devuelve el nuevo valor; el sufijo devuelve primero el valor y luego incrementa.

**Ejemplo (archivo):**
```javascript
let a = 5;
let b = 7;

// ... operaciones aritméticas comentadas ...

// Incrementar
console.log(a++);
console.log(++a);
console.log(a)

// Decremento
console.log(a--);
console.log(--a);
console.log(a)
```

**Notas prácticas:**
- Ten cuidado con el uso de `a++` dentro de expresiones; su posición afecta el valor usado en la expresión.

---

## `02-asignacion.js` 📝

**Qué se usa:**
- Operadores de asignación compuesta: `+=, -=, *=, /=, %=, **=`.
- `a++` como forma corta de `a = a + 1`.

**Por qué se usan:**
- Son atajos para actualizar una variable basándose en su valor actual (más concisos y habituales en loops/actualizaciones).

**Ejemplo (archivo):**
```javascript
let a = 5; 
a = a + 5;
a += 5;
a -= 5;
a *= 5;
a /= 5;
a %= 5;
a **= 5;

a++; // Aumentamos valor en 1
```

---

## `03-comparacion.js` ✅❌

**Qué se usa:**
- Comparaciones numéricas: `>, <, >=, <=`.
- Igualdad: `==` vs `===`, desigualdad `!=` vs `!==`.

**Por qué se usan:**
- `==` compara con coerción (convierte tipos si es necesario). `===` compara tipo y valor — generalmente preferido para evitar resultados inesperados.

**Ejemplo (archivo):**
```javascript
let a = 10;

console.log(a > 11);
console.log(a < 11);
console.log(a >= 11);
console.log(a <= 11);

console.log(a == 10);
console.log(a != 11);

console.log(a === 10);
console.log(a !== 1);
```

**Notas prácticas:**
- Recomiendo usar `===` y `!==` para comparaciones estrictas y evitar bugs por coerción.

---

## `04-logicos.js` && || !

**Qué se usa:**
- Operadores lógicos: AND `&&`, OR `||`, NOT `!`.

**Por qué se usan:**
- Para combinar condiciones y controlar flujo o valores dependientes de varias condiciones.

**Ejemplo (archivo):**
```javascript
let mayor = true;
let suscrito = true;

console.log('Operador AND', mayor && suscrito);
console.log('Operador OR', mayor || suscrito);

console.log('Operador Not', !mayor);

let catalogoInfantil = !mayor;
```

---

## `05-falsy.js` — falsy y short-circuit 🚦

**Qué se usa:**
- Concepto de valores "falsy" en JS: `false, 0, '', null, undefined, NaN`.
- Uso de `||` y `&&` para short-circuit (operadores que devuelven valores y pueden evitar evaluar la otra expresión).

**Por qué se usan:**
- Permiten dar valores por defecto (`nombre || 'Anonimo'`) o evitar ejecutar funciones/expresiones si no hace falta.

**Ejemplo (archivo):**
```javascript
let nombre = 'hola';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();
```

**Notas prácticas:**
- En `fn1() && fn2()`, si `fn1()` devuelve `false`, `fn2()` no se ejecuta (short-circuit).

---

## `06-ternario.js` ? :

**Qué se usa:**
- Operador ternario `condicion ? valorSiTrue : valorSiFalse`.

**Por qué se usa:**
- Sintaxis corta para asignar valores según una condición en una sola expresión; útil para asignaciones simples y dentro de JSX/plantillas.

**Ejemplo (archivo):**
```javascript
let edad = 20;
let acceso = edad > 17 ? 'permitir ingreso' : 'denegar ingreso';
console.log(acceso);
```

---

Si quieres, puedo:
- Añadir ejemplos comunes de errores (coerción con `==`, uso incorrecto de `++` dentro de expresiones, etc.).
- Generar tests/ejercicios interactivos para cada operador.
