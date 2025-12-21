function getbyIdx(arr, idx) {
    if(idx <= arr.length) {
        return arr[idx];
    }   
    return false;
}

let resultado = getbyIdx([1,2], 0);

console.log(resultado);