# 🎮 Hangman Game - Documentación Técnica

## 📋 Índice

1. [Descripción General](#descripción-general)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Funcionalidades Principales](#funcionalidades-principales)
4. [Estructura del Código](#estructura-del-código)
5. [Tecnologías Utilizadas](#tecnologías-utilizadas)
6. [Componentes Visuales](#componentes-visuales)
7. [Lógica del Juego](#lógica-del-juego)
8. [Mejoras Implementadas](#mejoras-implementadas)
9. [Guía de Uso](#guía-de-uso)
10. [Posibles Extensiones](#posibles-extensiones)

---

## 🎯 Descripción General

**Hangman V2** es una implementación profesional del clásico juego del ahorcado, desarrollado con JavaScript vanilla, HTML5 y CSS3. Este proyecto representa una refactorización completa de la versión V1, incorporando principios de programación orientada a objetos, diseño moderno y una experiencia de usuario mejorada.

### Objetivo del Juego

El jugador debe adivinar una palabra oculta letra por letra antes de quedarse sin vidas. Cada error dibuja una parte del ahorcado, y el jugador tiene un máximo de 6 intentos incorrectos antes de perder.

---

## 🏗️ Arquitectura del Proyecto

### Patrón de Diseño

El proyecto utiliza **Programación Orientada a Objetos (POO)** con una clase principal `HangmanGame` que encapsula toda la lógica del juego.

```
HangmanGame (Clase Principal)
├── Constructor
│   ├── Banco de palabras
│   ├── Estado del juego
│   └── Referencias al DOM
├── Métodos de Inicialización
│   ├── init()
│   ├── selectRandomWord()
│   └── createHiddenWord()
├── Métodos de Juego
│   ├── processGuess()
│   ├── revealLetter()
│   ├── checkWin()
│   └── endGame()
├── Métodos de Validación
│   └── isValidLetter()
├── Métodos de Renderizado
│   ├── renderWord()
│   ├── drawHangman()
│   ├── updateStats()
│   └── showMessage()
└── Métodos de Control
    ├── setupEventListeners()
    └── reset()
```

### Separación de Responsabilidades

1. **Estado del Juego**: Gestionado por propiedades de la clase
2. **Lógica de Negocio**: Métodos de procesamiento y validación
3. **Interfaz de Usuario**: Métodos de renderizado y actualización del DOM
4. **Eventos**: Configurados en `setupEventListeners()`

---

## ⚡ Funcionalidades Principales

### 1. Sistema de Vidas

- **6 vidas iniciales**: Cada error resta una vida
- **Visualización en tiempo real**: Contador dinámico
- **Dibujo progresivo**: El ahorcado se dibuja parte por parte

### 2. Gestión de Letras

- **Validación de entrada**: Solo acepta letras válidas (incluyendo ñ y acentos)
- **Prevención de duplicados**: No permite intentar la misma letra dos veces
- **Historial visual**: Muestra todas las letras intentadas con código de colores
  - 🟢 Verde: Letra correcta
  - 🔴 Rojo: Letra incorrecta

### 3. Visualización de la Palabra

- **Cajas individuales**: Cada letra tiene su propia caja
- **Animaciones de revelación**: Efecto visual al descubrir letras
- **Soporte para espacios**: Maneja palabras compuestas correctamente

### 4. Canvas Interactivo

- **Dibujo del ahorcado**: Renderizado con Canvas API
- **6 partes del cuerpo**:
  1. Cabeza
  2. Cuerpo
  3. Brazo izquierdo
  4. Brazo derecho
  5. Pierna izquierda
  6. Pierna derecha
- **Cara triste**: Se dibuja al perder el juego

### 5. Sistema de Mensajes

- **Feedback inmediato**: Mensajes contextuales según la acción
- **Tipos de mensajes**:
  - ✅ Éxito (verde): Letra correcta
  - ❌ Error (rojo): Letra incorrecta
  - ⚠️ Advertencia (amarillo): Validaciones
- **Auto-ocultamiento**: Los mensajes desaparecen después de 3 segundos

### 6. Modal de Game Over

- **Victoria**: Mensaje de felicitación con la palabra
- **Derrota**: Revela la palabra correcta
- **Botón de reinicio**: Permite jugar de nuevo inmediatamente

### 7. Estadísticas en Tiempo Real

- **Vidas restantes**: Contador actualizado
- **Letras usadas**: Total de intentos
- **Aciertos**: Número de letras correctas

---

## 🔧 Estructura del Código

### Variables de Estado

```javascript
class HangmanGame {
    constructor() {
        // Banco de palabras
        this.wordBank = [...];

        // Estado del juego
        this.selectedWord = "";        // Palabra actual
        this.hiddenWord = [];          // Array de letras reveladas
        this.usedLetters = new Set();  // Set de letras usadas
        this.remainingLives = 6;       // Vidas restantes
        this.correctGuesses = 0;       // Contador de aciertos
        this.gameActive = true;        // Estado activo/inactivo

        // Referencias al DOM
        this.canvas = ...;
        this.ctx = ...;
        // ... más referencias
    }
}
```

### Flujo de Ejecución

```
1. Instanciación de HangmanGame
   ↓
2. init() - Inicialización
   ├── selectRandomWord() - Seleccionar palabra
   ├── createHiddenWord() - Crear palabra oculta
   ├── renderWord() - Renderizar en DOM
   ├── updateStats() - Actualizar estadísticas
   ├── drawHangman() - Dibujar canvas inicial
   └── setupEventListeners() - Configurar eventos
   ↓
3. Ciclo de Juego
   ├── Usuario ingresa letra
   ├── handleGuess() - Función global
   ├── processGuess() - Procesar intento
   │   ├── Validaciones
   │   ├── Verificar si está en la palabra
   │   ├── Actualizar estado
   │   └── Verificar victoria/derrota
   ├── Actualizar UI
   └── Repetir hasta fin del juego
   ↓
4. Fin del Juego
   ├── endGame(won) - Mostrar modal
   └── Opción de reiniciar
```

---

## 💻 Tecnologías Utilizadas

### HTML5

- **Estructura semántica**: Uso de elementos apropiados
- **Canvas API**: Para dibujar el ahorcado
- **Accesibilidad**: Labels y atributos ARIA implícitos

### CSS3

- **Variables CSS (Custom Properties)**: Sistema de diseño consistente
- **Flexbox y Grid**: Layouts responsivos
- **Animaciones y Transiciones**: Experiencia fluida
- **Gradientes**: Efectos visuales modernos
- **Backdrop Filter**: Efecto glassmorphism
- **Media Queries**: Diseño responsive

### JavaScript ES6+

- **Clases**: Programación orientada a objetos
- **Arrow Functions**: Sintaxis moderna
- **Template Literals**: Strings dinámicos
- **Destructuring**: Código más limpio
- **Set**: Estructura de datos para letras únicas
- **Array Methods**: map, forEach, includes, etc.
- **Canvas API**: Dibujo 2D

---

## 🎨 Componentes Visuales

### Sistema de Diseño

#### Paleta de Colores

```css
--primary-color: #6366f1; /* Índigo principal */
--primary-dark: #4f46e5; /* Índigo oscuro */
--primary-light: #818cf8; /* Índigo claro */
--secondary-color: #ec4899; /* Rosa */
--success-color: #10b981; /* Verde éxito */
--danger-color: #ef4444; /* Rojo error */
--warning-color: #f59e0b; /* Amarillo advertencia */
```

#### Fondos

```css
--bg-primary: #0f172a; /* Fondo principal (azul oscuro) */
--bg-secondary: #1e293b; /* Fondo secundario */
--bg-tertiary: #334155; /* Fondo terciario */
```

#### Efectos

- **Sombras**: 4 niveles (sm, md, lg, xl) + glow
- **Bordes redondeados**: 4 tamaños (sm, md, lg, xl)
- **Transiciones**: 3 velocidades (fast, normal, slow)

### Animaciones Implementadas

1. **titlePulse**: Pulsación sutil del título
2. **backgroundMove**: Movimiento del patrón de fondo
3. **letterAppear**: Aparición de cajas de letras
4. **letterReveal**: Revelación de letras correctas
5. **usedLetterAppear**: Aparición de letras usadas
6. **messageSlide**: Deslizamiento de mensajes
7. **fadeIn**: Aparición del modal
8. **modalSlide**: Deslizamiento del modal

### Responsive Design

- **Desktop**: Layout completo con todas las características
- **Tablet** (≤768px): Grid de estadísticas 2x2, tamaños reducidos
- **Mobile** (≤480px): Layout vertical, estadísticas en columna única

---

## 🎲 Lógica del Juego

### Algoritmo de Selección de Palabra

```javascript
selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.wordBank.length);
    return this.wordBank[randomIndex].toUpperCase();
}
```

**Explicación**: Genera un índice aleatorio entre 0 y la longitud del array de palabras, luego retorna la palabra en mayúsculas.

### Creación de Palabra Oculta

```javascript
createHiddenWord(word) {
    return word.split('').map(char => {
        return char === ' ' ? ' ' : '_';
    });
}
```

**Explicación**: Convierte la palabra en un array de caracteres, reemplazando letras por guiones bajos pero manteniendo los espacios.

### Procesamiento de Adivinanza

```javascript
processGuess(letter) {
    // 1. Validar estado del juego
    if (!this.gameActive) return false;

    // 2. Validar formato de letra
    if (!this.isValidLetter(letter)) return false;

    // 3. Verificar duplicados
    if (this.usedLetters.has(letter)) return false;

    // 4. Agregar a letras usadas
    this.usedLetters.add(letter);

    // 5. Verificar si está en la palabra
    const isCorrect = this.selectedWord.includes(letter);

    // 6. Actualizar estado según resultado
    if (isCorrect) {
        this.revealLetter(letter);
        this.correctGuesses++;
        if (this.checkWin()) this.endGame(true);
    } else {
        this.remainingLives--;
        this.drawHangman();
        if (this.remainingLives === 0) this.endGame(false);
    }

    return true;
}
```

### Validación de Letras

```javascript
isValidLetter(letter) {
    return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]$/.test(letter);
}
```

**Explicación**: Expresión regular que acepta:

- Letras a-z (mayúsculas y minúsculas)
- Letra ñ (mayúscula y minúscula)
- Vocales acentuadas

### Revelación de Letras

```javascript
revealLetter(letter) {
    for (let i = 0; i < this.selectedWord.length; i++) {
        if (this.selectedWord[i] === letter) {
            this.hiddenWord[i] = letter;
        }
    }
    this.renderWord();
}
```

**Explicación**: Itera sobre la palabra completa y revela todas las ocurrencias de la letra adivinada.

### Verificación de Victoria

```javascript
checkWin() {
    return !this.hiddenWord.includes('_');
}
```

**Explicación**: El jugador gana cuando no quedan guiones bajos (todas las letras han sido reveladas).

### Dibujo del Ahorcado

```javascript
drawHangman() {
    const mistakes = 6 - this.remainingLives;

    // Estructura base (siempre visible)
    // - Base horizontal
    // - Poste vertical
    // - Poste horizontal
    // - Cuerda

    // Partes del cuerpo según errores
    if (mistakes >= 1) { /* Cabeza */ }
    if (mistakes >= 2) { /* Cuerpo */ }
    if (mistakes >= 3) { /* Brazo izquierdo */ }
    if (mistakes >= 4) { /* Brazo derecho */ }
    if (mistakes >= 5) { /* Pierna izquierda */ }
    if (mistakes >= 6) {
        /* Pierna derecha */
        /* Cara triste */
    }
}
```

**Explicación**: Dibuja progresivamente las partes del ahorcado usando Canvas API, basándose en el número de errores cometidos.

---

## 🚀 Mejoras Implementadas

### Comparación V1 vs V2

| Característica    | V1                 | V2                         |
| ----------------- | ------------------ | -------------------------- |
| **Arquitectura**  | Funciones globales | Clase POO                  |
| **Diseño**        | Básico             | Moderno con gradientes     |
| **Animaciones**   | Ninguna            | 8 animaciones              |
| **Canvas**        | No                 | Sí (dibujo del ahorcado)   |
| **Vidas**         | No implementado    | Sistema completo (6 vidas) |
| **Estadísticas**  | No                 | Panel en tiempo real       |
| **Mensajes**      | Console.log        | Sistema visual con tipos   |
| **Modal**         | No                 | Modal de game over         |
| **Validaciones**  | Básicas            | Completas y robustas       |
| **Responsive**    | No                 | Sí (3 breakpoints)         |
| **Comentarios**   | Mínimos            | Documentación completa     |
| **Letras usadas** | No visible         | Historial visual           |
| **UX**            | Básica             | Premium con feedback       |

### Mejoras Técnicas

1. **Encapsulación**: Todo el estado está contenido en la clase
2. **Reutilización**: Métodos modulares y reutilizables
3. **Mantenibilidad**: Código organizado y comentado
4. **Escalabilidad**: Fácil agregar nuevas características
5. **Performance**: Uso eficiente del DOM y Canvas
6. **Accesibilidad**: Mejor estructura semántica
7. **Seguridad**: Validaciones robustas

### Mejoras de UX/UI

1. **Feedback visual inmediato**: El usuario siempre sabe qué está pasando
2. **Animaciones suaves**: Transiciones fluidas entre estados
3. **Diseño moderno**: Glassmorphism, gradientes, sombras
4. **Responsive**: Funciona en cualquier dispositivo
5. **Accesibilidad de teclado**: Enter para enviar
6. **Auto-focus**: Input siempre listo para escribir
7. **Prevención de errores**: Validaciones proactivas

---

## 📖 Guía de Uso

### Para Jugadores

1. **Iniciar el juego**: La página carga automáticamente con una palabra aleatoria
2. **Adivinar letras**:
   - Escribe una letra en el campo de entrada
   - Presiona "Enviar" o la tecla Enter
3. **Observar el progreso**:
   - Las letras correctas se revelan en la palabra
   - Las letras incorrectas dibujan partes del ahorcado
   - El panel de estadísticas muestra tu progreso
4. **Ganar o perder**:
   - Ganas si adivinas todas las letras antes de 6 errores
   - Pierdes si cometes 6 errores
5. **Jugar de nuevo**: Presiona "Nueva Partida" o el botón en el modal

### Para Desarrolladores

#### Modificar el Banco de Palabras

```javascript
this.wordBank = [
  "TU_PALABRA_1",
  "TU_PALABRA_2",
  // Agrega más palabras aquí
];
```

#### Cambiar el Número de Vidas

```javascript
// En el constructor
this.remainingLives = 8; // Cambia de 6 a 8 vidas

// Actualiza también el método drawHangman() para agregar más partes
```

#### Personalizar Colores

```css
:root {
  --primary-color: #tu-color;
  /* Modifica las variables CSS */
}
```

#### Agregar Categorías

```javascript
this.categories = {
    tecnologia: ["JAVASCRIPT", "PYTHON", ...],
    animales: ["ELEFANTE", "JIRAFA", ...],
    // ...
};

// Modificar selectRandomWord() para elegir de una categoría
```

---

## 🔮 Posibles Extensiones

### Funcionalidades Adicionales

1. **Sistema de Puntuación**

   - Puntos por letra correcta
   - Bonificación por velocidad
   - Tabla de récords

2. **Niveles de Dificultad**

   - Fácil: 8 vidas, palabras cortas
   - Normal: 6 vidas, palabras medianas
   - Difícil: 4 vidas, palabras largas

3. **Categorías Temáticas**

   - Selector de categoría
   - Pistas visuales según categoría
   - Diferentes bancos de palabras

4. **Modo Multijugador**

   - Un jugador elige la palabra
   - Otro jugador adivina
   - Turnos alternados

5. **Pistas**

   - Sistema de pistas (costo: 1 vida)
   - Revelar una letra aleatoria
   - Mostrar definición de la palabra

6. **Estadísticas Persistentes**

   - LocalStorage para guardar progreso
   - Historial de partidas
   - Porcentaje de victorias

7. **Sonidos y Música**

   - Efectos de sonido para aciertos/errores
   - Música de fondo
   - Sonido de victoria/derrota

8. **Teclado Virtual**

   - Teclado en pantalla
   - Letras deshabilitadas al usarse
   - Mejor experiencia en móviles

9. **Temporizador**

   - Límite de tiempo por partida
   - Modo contrarreloj
   - Bonificación por tiempo restante

10. **Internacionalización**
    - Soporte para múltiples idiomas
    - Palabras en diferentes idiomas
    - Interfaz traducible

### Mejoras Técnicas

1. **TypeScript**: Migrar a TypeScript para type safety
2. **Framework**: Portar a React/Vue para mejor gestión de estado
3. **Testing**: Agregar tests unitarios y de integración
4. **PWA**: Convertir en Progressive Web App
5. **Backend**: Conectar con API para palabras dinámicas
6. **Base de Datos**: Guardar estadísticas en servidor
7. **Autenticación**: Sistema de usuarios
8. **Leaderboard**: Tabla de clasificación global

---

## 📚 Conceptos de Programación Aplicados

### 1. Programación Orientada a Objetos (POO)

- **Encapsulación**: Estado y métodos en una clase
- **Abstracción**: Interfaz simple para funcionalidad compleja
- **Modularidad**: Métodos con responsabilidades únicas

### 2. Estructuras de Datos

- **Array**: Para palabra oculta y banco de palabras
- **Set**: Para letras únicas sin duplicados
- **String**: Manipulación de texto

### 3. Algoritmos

- **Búsqueda**: Verificar si letra está en palabra
- **Iteración**: Recorrer arrays y strings
- **Validación**: Expresiones regulares
- **Aleatoriedad**: Selección de palabra random

### 4. DOM Manipulation

- **Query Selectors**: Acceso a elementos
- **Event Listeners**: Manejo de eventos
- **Dynamic Content**: Creación de elementos
- **Class Manipulation**: Cambio de estilos

### 5. Canvas API

- **Contexto 2D**: Dibujo en canvas
- **Paths**: Líneas y formas
- **Styling**: Colores y grosores

### 6. CSS Avanzado

- **Variables CSS**: Sistema de diseño
- **Flexbox/Grid**: Layouts modernos
- **Animations**: Keyframes y transitions
- **Responsive**: Media queries

### 7. Patrones de Diseño

- **Singleton**: Una sola instancia del juego
- **Observer**: Event listeners
- **State Pattern**: Gestión de estados del juego

---

## 🎓 Aprendizajes Clave

### Para Principiantes

1. Cómo estructurar un proyecto JavaScript
2. Uso de clases y métodos
3. Manipulación del DOM
4. Event handling
5. Validación de inputs

### Para Intermedios

1. Arquitectura de aplicaciones
2. Gestión de estado
3. Canvas API
4. Animaciones CSS
5. Diseño responsive

### Para Avanzados

1. Patrones de diseño
2. Optimización de performance
3. Arquitectura escalable
4. Best practices de código
5. Documentación profesional

---

## 📝 Conclusión

Este proyecto demuestra cómo un juego simple puede convertirse en una aplicación profesional mediante:

- **Buena arquitectura**: Código organizado y mantenible
- **Diseño moderno**: UX/UI atractiva y funcional
- **Código limpio**: Comentado y documentado
- **Mejores prácticas**: Validaciones, manejo de errores, responsive

El juego del Ahorcado V2 es un excelente ejemplo de cómo aplicar conceptos de programación en un proyecto real, combinando lógica, diseño y experiencia de usuario.

---

## 👨‍💻 Autor

**Proyecto**: Hangman Game V2  
**Fecha**: 2025  
**Tecnologías**: HTML5, CSS3, JavaScript ES6+  
**Tipo**: Mini Proyecto Educativo

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

---

**¡Disfruta jugando y aprendiendo! 🎮✨**
