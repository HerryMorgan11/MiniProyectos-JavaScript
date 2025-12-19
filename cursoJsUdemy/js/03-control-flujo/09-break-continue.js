let i = 0;
while (i < 6) {
    i++;

    if (i === 2) {
        continue;   // Si i es 2, todo que haya despues de esta condición se ignora y vuelve al principio
    }

    if (i === 4) {
        break;      // Si i es 4, se sale del bucle
    }
    console.log(i)
}

// Esto se puede usar para for, for of, for in, while, do while