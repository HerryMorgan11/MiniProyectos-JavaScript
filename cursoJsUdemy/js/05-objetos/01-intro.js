let user = {
    email: 'djacobo@gmail.com',
    name: 'David',
    direccion: {
        calle: 'Queen St',
        numero: 53,
    },
    activo: true,
    // Una función sin su nombre se llama funcion anónima
    recuperarClave: function (){
        console.log('Recuperando clave');
    }
} 