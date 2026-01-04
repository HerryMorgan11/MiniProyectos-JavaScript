let objeto = {
    id: 1,
    name: "David",
    login: function() {},
    logut: function() {},
};

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    let prop = false;
    for (let llave in obj) {
        if(llave === propiedad) {
            prop = true;
        }
    }
    return prop
}

console.log(tieneProp(objeto, propiedad));
