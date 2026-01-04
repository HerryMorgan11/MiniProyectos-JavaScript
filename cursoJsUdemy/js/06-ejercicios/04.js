let objeto = {
    id: 1,
    name: "David",
    login: function() {},
    logut: function() {},
};

function cualesMetodos(obj) {
    for (let llave in obj) {
        /*
        if (llave === 'login' || llave === 'logut') {
        }
            */
        
        if (typeof obj[llave] === 'function') {
            console.log(llave)
        }

    }
}

cualesMetodos(objeto);