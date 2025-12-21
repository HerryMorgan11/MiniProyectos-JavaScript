let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivos = 0;
    let negativos = 0;

    for (numeros of arr) {
        numeros > 0 ? positivos++ : negativos++;
    }

    return positivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);