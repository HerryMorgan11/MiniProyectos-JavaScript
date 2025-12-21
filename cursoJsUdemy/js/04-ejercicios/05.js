let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let mayor = arr[0];     // Igualamos al primer valor para que tengan un valor comparable
    let menor = arr[0];
    for (array of arr) {
        if (mayor < array) {
            mayor = array;
        } 

        if (menor > array) {
            menor = array;
        }
    }
    return [menor, mayor];  // Devuelvo un array
}

let numeros = getMenorMayor(array);

console.log(numeros)